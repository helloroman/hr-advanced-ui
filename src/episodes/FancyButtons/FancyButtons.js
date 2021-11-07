import React from 'react';
import styled, {keyframes} from 'styled-components';


const moveUpInitial = keyframes`
  to {
    transform: translate(0, -105%);
  }
`;

const moveUpEnd = keyframes`from {
        transform: translate(0, 100%);
    }
    to {
        transform: translate(0, 0);
    }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 200px;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: transparent;
  margin: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

const ButtonA = styled(StyledButton)`
  border: 3px solid black;
  position: relative;
  overflow: hidden;
  transition: color .4s cubic-bezier(.61,.07,.23,.89);
  
  &::after {
    position: absolute;
    content: '';
    width: 300px;
    height: 300px;
    background-color: black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 300px;
    transform-origin: 50%;
    transition: transform 0.4s cubic-bezier(.61,.07,.23,.89);
    z-index: -1;
  }
  
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
  }
  
  &:hover {
    color: white;
  }
`;

export const ButtonB = styled(StyledButton)`
  border: 3px solid black;
  position: relative;
  overflow: hidden;
  transition: color .4s cubic-bezier(.61,.07,.23,.89);
  
  &::after {
    position: absolute;
    content: '';
    width: 200px;
    height: 50px;
    background-color: black;
    left: 0;
    top: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.4s cubic-bezier(.61,.07,.23,.89);
    z-index: -1;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  &:hover {
    color: white;
  }
`;

const ButtonC = styled(StyledButton)`
  font-size: 20px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 0 3px black;
  
  span {
    position: relative;
    z-index: 2;
  }

  &::after {
    position: absolute;
    content: '';
    width: 250px;
    height: 250px;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1) rotate(45deg);
    transform-origin: 50%;
    transition: transform 0.5s cubic-bezier(.61,.07,.23,.89);
    z-index: 1;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(0) rotate(45deg); 
  }
`;

const ButtonD = styled(StyledButton)`
  font-size: 20px;
  font-weight: bold;
  position: relative;
  border: 3px solid black;
  overflow: hidden;
  
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    transition: transform 0.3s ease-in-out;
  }

  span:nth-child(1) {
    transform: translateY(${({isLoading, isSuccess}) => {
        if (isLoading) return '-100%';
        if (isSuccess) return '-100%';
        return '0%';
    }});
  }
  
  span:nth-child(2) {
    transform: translateY(${({isLoading, isSuccess}) => {
      if (isLoading) return '0%';
      if (isSuccess) return '-100%';
      return '100%';
    }});
    color: white;
    
    &::before {
      background-color: black;
      width: 100%;
      height: 100%;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      transition: transform 2.5s 0.5s ease-in-out;
      transform: scaleX(${({isLoading}) => isLoading ? '1' : '0'});
      transform-origin: 0;
      z-index: -1;
    }
  }

  span:nth-child(3) {
    transform: translateY(${({isLoading, isSuccess}) => {
      if (isLoading) return '100%';
      if (isSuccess) return '0%';
      return '200%';
    }});
  }
`;

const ButtonE = styled(StyledButton)`
  position: relative;
  overflow: hidden;
  font-size: 20px;
  font-weight: bold;

  & > span {
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover span {
    animation: ${moveUpInitial} 0.2s forwards, ${moveUpEnd} 0.35s forwards 0.2s;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: #000;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 15% 100%);
    transition: clip-path 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    transition-duration: 0.35s;
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
  }
`;

const ButtonF = styled(StyledButton)`
  position: relative;
  overflow: hidden;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid black;
  background-color: white;

  & > span {
    mix-blend-mode: difference;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover span {
    animation: ${moveUpInitial} 0.2s forwards, ${moveUpEnd} 0.35s forwards 0.2s;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 100%;
    content: '';
    background: #000;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: clip-path 0.2s ease-in-out;
  }

  &:hover::before {
    transition-duration: 0.35s;
    clip-path: polygon(0 0, 100% 0, 0 0, 0 100%);
  }
`;

const FancyButtons = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsSuccess(true);
            setIsLoading(false);
        }, 3000)
    }

    return (
        <Wrapper>
            <ButtonA>Click me</ButtonA>
            <ButtonB>Submit</ButtonB>
            <ButtonC><span>Submit</span></ButtonC>
            <ButtonD isLoading={isLoading} isSuccess={isSuccess} onClick={handleClick}>
                <span>Submit</span>
                <span>Loading</span>
                <span>Thank you!</span>
            </ButtonD>
            <ButtonE><span>Next</span></ButtonE>
            <ButtonF><span>Next</span></ButtonF>
        </Wrapper>
    )
};

export default FancyButtons