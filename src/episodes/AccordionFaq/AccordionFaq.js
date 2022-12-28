import React from "react";
import { data } from "./data";
import styled, { keyframes } from "styled-components";

const showBox = keyframes`
0% {
    transform: scaleY(0);
}
 100% {
    transform: scaleY(1);
 }
 `;

const showText = keyframes`
 0% {
    opacity: 0;
    transform: translateX(-2%);
 }
 100% {
    opacity: 1;
    transform: translateX(0);
 }
 `;

const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
`;

const StyledDetails = styled.details`
  width: 600px;
  margin: 30px 0;
  position: relative;

  summary {
    list-style: none;
    cursor: pointer;
    font-size: 24px;
  }

  summary::after {
    content: ">";
    position: absolute;
    left: -50px;
    transition: transform 0.3s ease-in-out;
    transform: rotate(90deg);
  }

  /* summary::before {
    content: ">";
    left: -50px;
    position: absolute;
  } */
  &[open] {
    summary::after {
      transform: rotate(-90deg);
    }
  }

  div {
    transform: scaleY(0);
    transform-origin: 0 0;
    animation: 0.5s ease-in-out 1 forwards ${showBox};
    padding: 20px 40px;
    margin: 20px 0;
    background-color: #f9e852;
    border-left: 5px solid black;
  }
  summary:focus-visible {
    outline: 3px solid #f9e852;
  }

  p {
    opacity: 0;
    animation: 0.2s 0.4s ease-in 1 forwards ${showText};
  }
`;

const AccordionFaq = () => {
  return (
    <Wrapper>
      {data.map(({ title, content }, i) => (
        <StyledDetails key={i}>
          <summary>{title}</summary>
          <div>
            <p>{content}</p>
          </div>
        </StyledDetails>
      ))}
    </Wrapper>
  );
};

export default AccordionFaq;
