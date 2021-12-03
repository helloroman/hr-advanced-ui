import React from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import {ReactComponent as HeroImage} from 'assets/images/hero.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;

  svg {
    width: 400px;
  }
`;

const AnimatedSvg = () => {
  return (
    <Wrapper>
      <HeroImage/>
    </Wrapper>
  )
};

export default AnimatedSvg