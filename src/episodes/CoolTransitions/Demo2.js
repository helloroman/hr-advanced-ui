import React from 'react';
import styled from 'styled-components';
import {ButtonB} from "../FancyButtons/FancyButtons";

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

const Demo2 = () => {
    return (
        <Wrapper>
            <TextContainer>
                <StyledText><span>Start</span></StyledText>
                <StyledText><span>here</span></StyledText>
            </TextContainer>
            <StyledCurtain />
            <StyledButton>Next</StyledButton>
        </Wrapper>
    )
};

export default Demo2;
