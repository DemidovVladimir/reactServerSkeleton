import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import Step1 from './components/Step1.jsx';


var routes = (
    <Route path="/" component={App}>
      <Route path="/step1" component={Step1} />
    </Route>
)

export default routes;
