import React from 'react';
import styled from "styled-components";
import image from './journey.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const StyledText = styled.h1`
  font-size: 105px;
  font-weight: bold;
`;

const StyledButton = styled.button`
  margin-top: 50px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  position: relative;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 100px;
  width: 150px;
  height: 150px;
  
  &:hover span {
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  background-color: black;
  width: 150px;
  height: 150px;
  z-index: -1;
  transform-origin: 50% 50%;
  transition: transform 0.3s ease;
`;

const StyledImage = styled.img`
  width: 500px;
  height: auto;
  display: none;
`;

const StyledCloseButton = styled.button`
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  margin-top: 20px;
  display: none;
`;

const Demo3 = () => {
    return (
        <Wrapper>
            <StyledText>Amazing journey</StyledText>
            <StyledButton>Discover
                <StyledSpan />
            </StyledButton>
            <StyledImage src={image} alt="My journey"/>
            <StyledCloseButton>Close</StyledCloseButton>
        </Wrapper>
    )
};

export default Demo3;
