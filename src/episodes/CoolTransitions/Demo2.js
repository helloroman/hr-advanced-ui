import React from 'react';
import styled from 'styled-components';
import {ButtonB} from "../FancyButtons/FancyButtons";
import gsap from 'gsap';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCurtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  background-color: #181818;
  transform-origin: 0 0;
`;

const TextContainer = styled.div`
  overflow: hidden;
  transform: rotate(-25deg);
`;

const StyledText = styled.span`
  margin: 0;
  font-size: 105px;
  display: block;
  overflow: hidden;
  line-height: 0.9;
  font-weight: bold;

  span {
    display: block;
  }
`;

const StyledButton = styled(ButtonB)`
  width: 100px;
  height: 30px;
  font-size: 15px;
  position: absolute;
  top: 70%;
`;

const firstSlide = ['Start', 'here'];
const secondSlide = ['End', 'there'];

const Demo2 = () => {
    const [content, setContent] = React.useState(firstSlide)
    const [currentSlide, setCurrentSlide] = React.useState(1)
    const tl = React.useRef(null);
    const textRef = React.useRef();
    const textRef2 = React.useRef();
    const curtainRef = React.useRef();

    React.useEffect(() => {
        tl.current = gsap.timeline({paused: true});

        if (tl.current) {
            tl.current
                .to([textRef.current, textRef2.current], {
                    y: '-105%', duration: 0.5, onComplete: () => {
                        if (currentSlide === 1) {
                            setContent(secondSlide)
                        } else {
                            setContent(firstSlide);
                        }
                    }
                }, 0)
                .set(curtainRef.current, {
                    x: '100%',
                })
                .to(curtainRef.current, {
                    x: '0', duration: 0.3,
                })
                .to(curtainRef.current, {
                    x: '-100%', duration: 0.3,
                }, '+=0.2')
                .set([textRef.current, textRef2.current], {
                    y: '100%'
                })
                .to([textRef.current, textRef2.current], {
                    y: '0', duration: 0.5
                })

        }
    }, [currentSlide])

    const handleClick = () => {
        currentSlide === 1 ? setCurrentSlide(2) : setCurrentSlide(1)
        tl.current.play();
    }

    return (
        <Wrapper>
            <TextContainer>
                <StyledText><span ref={textRef}>{content[0]}</span></StyledText>
                <StyledText><span ref={textRef2}>{content[1]}</span></StyledText>
            </TextContainer>
            <StyledCurtain ref={curtainRef} />
            <StyledButton onClick={handleClick}>Next</StyledButton>
        </Wrapper>
    )
};

export default Demo2;
