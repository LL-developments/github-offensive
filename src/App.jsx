import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Footer, Header } from 'components';
import { About, Dashboard, Home } from 'pages';
import style from './App.module.css';

function App() {
  return (
    <section className={style.container}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </section>
  );
}

export default App;
