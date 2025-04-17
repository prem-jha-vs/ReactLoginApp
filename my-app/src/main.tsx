import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './screens';
import { Button } from './components';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={() => <Button>Home</Button>} />
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));