import React from 'react';
import {data} from './data';
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
`;

const showBox = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

const showContent = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2%);
  }
  100% {
    opacity: 100%;
    transform: translateX(0);
  }
`;

const StyledDetails = styled.details`
  width: 600px;
  margin: 30px 0;
  position: relative;

  summary {
    font-size: 24px;
    list-style: none;
    cursor: pointer;
  }

  summary::after {
    position: absolute;
    left: -50px;
    display: inline-block;
    content: '>';
    margin-left: 20px;
    transition: transform 0.2s ease-in-out;
    transform: rotate(90deg);
  }

  summary:focus-visible {
    outline: 3px solid #f9e852;
  }

  &[open] {
    summary::after {
      transform: rotate(-90deg);
    }
  }
  
  // Firefox animation workaround
  &[open] div {
    display: block;
  }

  div {
    display: none;
    transform: scaleY(0);
    transform-origin: 0 0;
    animation: 0.5s ease-in-out 1 forwards ${showBox};
    font-size: 18px;
    line-height: 1.5;
    margin: 20px 0;
    background-color: #f9e852;
    padding: 20px 40px 20px 20px;
    border-left: 10px solid black;

    p {
      opacity: 0;
      animation: 0.3s 0.6s ease-in 1 forwards ${showContent};
    }
  }

  @media not all and (min-resolution:.001dpcm)
  { @supports (-webkit-appearance:none) and (stroke-color:transparent) {
    summary::-webkit-details-marker {
      display: none;
    }
    
    summary:focus {
      outline: 3px solid #f9e852;
    }
  }}
`;

const AccordionFaq = () => {
    return (
        <Wrapper>
            {data.map(item => (
                <StyledDetails key={item.title}>
                    <summary>{item.title}</summary>
                    <div>
                        <p>{item.content}</p>
                    </div>
                </StyledDetails>
            ))}
        </Wrapper>
    )
};

export default AccordionFaq;