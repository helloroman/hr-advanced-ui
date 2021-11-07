import React from 'react';
import styled from "styled-components";
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
    return (
        <Wrapper>
            <StyledHalfBox>
                <StyledText>Discover</StyledText>
            </StyledHalfBox>
            <StyledCurtain>
                <img src={image} alt=""/>
                <StyledText isWhite>More</StyledText>
            </StyledCurtain>
            <StyledContent isColumn>
                <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque blanditiis
                    commodi consequuntur ducimus ea earum in ipsum iste itaque iusto minus natus necessitatibus numquam,
                    quam quos recusandae rerum!</StyledParagraph>
                <StyledParagraph>[click here to close]</StyledParagraph>
            </StyledContent>
        </Wrapper>
    )
};

export default Demo4;
