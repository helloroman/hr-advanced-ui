import React, {useState, useEffect, useRef, useCallback} from 'react';
import styled, {keyframes} from 'styled-components';
import data from './beers.json';
import * as paginate from 'paginatejson';

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  justify-content: center;
  grid-template-columns: 400px 400px;
  grid-template-rows: auto;
  grid-gap: 50px 50px;
`;

const ItemWrapper = styled.div`
  min-height: 400px;
  justify-self: center;
  border: 10px solid black;
  height: auto;
  width: 100%;
  position: relative;
  padding: 20px 0 20px 30px;

  img {
    max-height: 400px;
    object-fit: contain;
  }

  div {
    width: 100%;
    text-align: right;
    padding: 0 10px;
    font-weight: bold;
    position: absolute;
    left: 0;
    bottom: 10%;
    background-color: #ffd121;
    z-index: -1;
  }
`;

const Beer = React.forwardRef(({data: {image_url: imageUrl, name, abv}}, ref) => {
    const getShortName = (name) => {
        const words = name.split(" ");
        return `${words[0]} ${words[1]}`;
    };

    return (
        <ItemWrapper ref={ref}>
            <img src={imageUrl} alt={data.name}/>
            <div>
                <p>{name.length > 10 ? getShortName(name) : name}</p>
                <p>{abv}</p>
            </div>
        </ItemWrapper>
    )
});

const loaderAppear = keyframes`
   from {
     opacity: 0;
   }
  to {
    opacity: 100%;
  }
`;

const LoaderWrapper = styled.div`
  opacity: 0;
  animation: 0.2s ease-in forwards 1 ${loaderAppear};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-image: linear-gradient(0deg, white, rgba(255, 255, 255, 0.5));
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;

  p {
    margin: 20px 0 0 0;
    font-size: 45px;
    font-weight: bold;
    color: black;
    text-shadow: 3px 3px 0px rgba(254, 183, 16, 0.8);
  }
`;

const bubbling = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const Bubbles = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bubble = styled.div`
  align-self: flex-end;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(254, 183, 16, 0.8);
  background-color: rgba(254, 183, 16, 0.8);
  border-radius: 50px;
  opacity: 0;
  animation: linear infinite forwards ${bubbling};
  animation-delay: ${() => {
    return `${Math.ceil(Math.random() * (1 - 0.25 + 1) + 0.25)}s`;
}};
  animation-duration: ${() => {
    return `${Math.ceil(Math.random() * (3 - 0.25 + 1) + 0.25)}s`;
}};
`;

const Loader = () => (
    <LoaderWrapper>
        <Bubbles>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
        </Bubbles>
        <p>More beers coming in...</p>
    </LoaderWrapper>
)

const fetchBeers = (page = 1) => {
    const {items, ...pageInfo} = paginate.paginate(data, page, 6);
    return new Promise(resolve => setTimeout(() => resolve({items, page: pageInfo}), 2500));
}

const InfiniteScroll = () => {
    const [page, setPage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const lastItemRef = useRef(null);
    const observer = useRef(null);

    useEffect(() => {
        fetchBeers().then(res => {
            setItems([...res.items]);
            setPage(res.page);
        })
    }, [])

    const getMoreBeers = useCallback(() => {
        if (!page || !page.next || isLoading) return;
        setIsLoading(true);
        fetchBeers(page.next).then(res => {
            setItems([...items, ...res.items]);
            setPage(res.page);
            setIsLoading(false);
        })
    }, [isLoading, items, page]);

    useEffect(() => {
        const options = {
            root: document,
            threshold: 1
        };
        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                getMoreBeers();
            }
        };
        observer.current = new IntersectionObserver(callback, options);
        if (lastItemRef.current) {
            observer.current.observe(lastItemRef.current);
        }
        return () => {
            observer.current.disconnect();
        };
    }, [getMoreBeers])

    return (
        <>
            <Wrapper>
                {items.map((item, i) => {
                    if (i === items.length - 1) return <Beer key={item.name} ref={lastItemRef} data={item}/>;
                    return <Beer key={item.name} data={item}/>;
                })}
            </Wrapper>
            {isLoading ? <Loader/> : null}
        </>
    )
};

export default InfiniteScroll