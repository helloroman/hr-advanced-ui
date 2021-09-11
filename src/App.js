import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import Welcome from "./components/Welcome/Welcome";
import {GlobalStyle} from "./assets/styles/GlobalStyles";
import InfiniteScroll from "./episodes/InfiniteLoading/InfiniteScroll";
import AccordionFaq from "./episodes/AccordionFaq/AccordionFaq";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/infinite-scroll">
            <InfiniteScroll />
          </Route>
          <Route path="/accordion-faq">
            <AccordionFaq />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
