import React from 'react';
import styled from "styled-components";
import gsap from 'gsap';
import image from './discover.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const StyledHalfBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  flex-direction: ${({isColumn}) => isColumn ? 'column' : 'row'};
`;

const StyledText = styled.span`
  font-size: 105px;
  font-weight: bold;
  color: ${({isWhite}) => isWhite ? 'white' : 'black'};
`;

const StyledContent = styled(StyledHalfBox)`
  position: absolute;
  right: -50vw;
`;

const StyledCurtain = styled(StyledHalfBox)`
  position: absolute;
  right: 0;
  cursor: pointer;
  z-index: 2;

  img {
    width: 50vw;
    position: absolute;
    object-fit: cover;
    z-index: -1;
  }
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  max-width: 500px;
`;

const Demo4 = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const tl = React.useRef(null);
    const curtainRef = React.useRef(null);
    const titleRef = React.useRef(null);
    const contentRef = React.useRef(null);

    React.useEffect(() => {
        tl.current = gsap.timeline({paused: true});

        tl.current
            .addLabel('start')
            .to([curtainRef.current.children, titleRef.current, contentRef.current], {
                x: '-50vw',
                duration: 0.5,
                easing: 'cubic-bezier(.47,.93,0,1.02)',
                stagger: 0.03
            }, 'start')
    }, [])

    const handleClick = () => {
        if (isOpen) {
            tl.current.reverse();
            setIsOpen(!isOpen);
        } else {
            tl.current.play();
            setIsOpen(!isOpen);
        }
    }

    return (
        <Wrapper>
            <StyledHalfBox ref={titleRef}>
                <StyledText>Discover</StyledText>
            </StyledHalfBox>
            <StyledCurtain ref={curtainRef} onClick={handleClick}>
                <img src={image} alt=""/>
                <StyledText isWhite>More</StyledText>
            </StyledCurtain>
            <StyledContent isColumn ref={contentRef}>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque blanditiis
                    commodi consequuntur ducimus ea earum in ipsum iste itaque iusto minus natus necessitatibus numquam,
                    quam quos recusandae rerum!</StyledParagraph>
                <StyledParagraph>[click here to close]</StyledParagraph>
            </StyledContent>
        </Wrapper>
    )
};

export default Demo4;
