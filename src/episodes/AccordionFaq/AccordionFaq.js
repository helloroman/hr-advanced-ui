import React from 'react';
import { data } from './data';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
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
  
  div {
    font-size: 18px;
    line-height: 1.5;
    margin: 20px 0;
    background-color: #f9e852;
    padding: 20px 40px 20px 20px;
    border-left: 10px solid black;
  }
`;

const AccordionFaq = () => {
    return (
        <Wrapper>
            {data.map(item => (
                <StyledDetails key={item.title}>
                    <summary>{item.title}</summary>
                    <div>{item.content}</div>
                </StyledDetails>
            ))}
        </Wrapper>
    )
};

export default AccordionFaq;