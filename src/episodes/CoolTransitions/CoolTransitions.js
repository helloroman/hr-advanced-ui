import React from 'react';
import {Route, Switch} from "react-router-dom";
import {NavLink} from "react-router-dom";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import Demo4 from "./Demo4";
import styled from 'styled-components';

const Navigation = styled.div`
  z-index: 1000;
  position: absolute;
  bottom: 20px;
  right: 40px;
  
  a {
    margin-left: 30px;
  }
`;

const CoolTransitions = () => {
    return (
        <>
            <Navigation>
                <NavLink to='/cool-transitions'>Demo 1</NavLink>
                <NavLink to='/cool-transitions/demo-2'>Demo 2</NavLink>
                <NavLink to='/cool-transitions/demo-3'>Demo 3</NavLink>
                <NavLink to='/cool-transitions/demo-4'>Demo 4</NavLink>
            </Navigation>
            <Switch>
                <Route path="/cool-transitions/demo-2">
                    <Demo2 />
                </Route>
                <Route path="/cool-transitions/demo-3">
                    <Demo3 />
                </Route>
                <Route path="/cool-transitions/demo-4">
                    <Demo4 />
                </Route>
                <Route path="/cool-transitions">
                    <Demo1 />
                </Route>
            </Switch>
        </>
    )
};

export default CoolTransitions