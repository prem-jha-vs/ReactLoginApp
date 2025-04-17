import React from 'react';
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

export default App;