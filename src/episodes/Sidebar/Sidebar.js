import React from 'react';
import styled, {keyframes} from 'styled-components';

const AppearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NavigationList = styled.nav`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 0.2s ease-in-out 1 ${AppearAnimation};

  @media (min-width: 1024px) {
    width: 300px;
    border-right: 3px solid black;
    transition: transform 0.5s ease-in-out;
    transform: translateX(${({isOpen}) => isOpen ? '0' : '-100%'});
  }
`;

const NavigationItem = styled.div`
  pointer-events: auto;
  margin: 30px 0;

  a {
    font-size: 25px;
    text-decoration: none;
    color: black;
  }
`;

const ToggleButton = styled.button`
  pointer-events: auto;
  z-index: 9999;
  position: absolute;
  left: 20px;
  top: 20px;
  border: 2px solid black;
  width: 40px;
  height: 40px;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow-x: hidden;

  div:first-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
    transition: transform ease-in-out 0.3s;

    &::before, &::after {
      position: absolute;
      left: 50%;
      content: '';
      width: 17px;
      height: 3px;
      background-color: black;
    }

    &::before {
      top: 13px;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      bottom: 13px;
      transform: translate(-50%, 50%) rotate(-45deg);
    }
  }

  div:last-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(100% + 2px);
    transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
    transition: transform ease-out 0.3s;

    &::before, &::after {
      position: absolute;
      left: 50%;
      content: '';
      width: 30px;
      height: 3px;
      background-color: black;
      transform-origin: 50% 50%;
    }

    &::before {
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

const Content = styled.h1`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 200px 30px;

  div {
    width: 100%;
    background-color: lightgray;
    height: 20vh;
    
    &:hover {
      background-color: pink;
    }
  }
`;

const Sidebar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <ToggleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div/>
                <div/>
            </ToggleButton>
            <NavigationList isOpen={isOpen}>
                <NavigationItem><a href="/">Lorem</a></NavigationItem>
                <NavigationItem><a href="/">Ipsum</a></NavigationItem>
                <NavigationItem><a href="/">Dolor</a></NavigationItem>
                <NavigationItem><a href="/">Sit</a></NavigationItem>
                <NavigationItem><a href="/">Amet</a></NavigationItem>
            </NavigationList>
            <Content>
                <div/>
                <div/>
                <div/>
                <div/>
            </Content>
        </>
    )
};

export default Sidebar