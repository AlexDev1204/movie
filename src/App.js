import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router";
import "./App.css";

import { Wrapper } from "./styled";

import { Header } from "./components/header";

import { Main } from "./pages/main";
import { Details } from "./pages/details";
import { Favorites } from "./pages/favorite";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </Wrapper>
    </Fragment>
  );
};
