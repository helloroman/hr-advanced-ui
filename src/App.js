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
import Sidebar from "./episodes/Sidebar/Sidebar";
import Combobox from "./episodes/Combobox/Combobox";
import FancyButtons from "./episodes/FancyButtons/FancyButtons";
import CoolTransitions from "./episodes/CoolTransitions/CoolTransitions";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/cool-transitions">
            <CoolTransitions />
          </Route>
          <Route path="/fancy-buttons">
            <FancyButtons />
          </Route>
          <Route path="/combobox">
            <Combobox />
          </Route>
          <Route path="/infinite-scroll">
            <InfiniteScroll />
          </Route>
          <Route path="/accordion-faq">
            <AccordionFaq />
          </Route>
          <Route path="/sidebar">
            <Sidebar />
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
