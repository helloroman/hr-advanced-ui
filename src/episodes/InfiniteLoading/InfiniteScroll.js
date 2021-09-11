import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 50px;
  min-height: 110vh;
`;

const InfiniteScroll = () => {
    return (
        <>
            <Wrapper>
                <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                </div>
            </Wrapper>
        </>
    )
};

export default InfiniteScroll