import React from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 700px;
  height: 400px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  text-align: center;
`;

const StyledLogo = styled(Logo)`
  width: 50px;
  height: auto;
`

const Welcome = () => {
    return (
        <Wrapper>
            <Content>
            <StyledLogo />
            <h1>Hello Roman – Zaawansowany UI</h1>
            <p>W tym projekcie znajdziesz wszystkie przykłady, które powstały w kursie Zaawansowany UI. Możesz nawigować pomiędzy nimi używając menu po prawej stronie.</p>
            <p><strong>Powodzenia i owocnej nauki!</strong></p>
            </Content>
        </Wrapper>
    )
};

export default Welcome