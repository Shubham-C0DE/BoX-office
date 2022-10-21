import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">This Is Our Home Page</Route>

      <Route exact path="/starred">This Is Not Our Home Page</Route>

      <Route>404 Page Error NOT FOUND!!!</Route>
    </Switch>
  );
}

export default App;
