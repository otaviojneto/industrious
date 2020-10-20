import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../views/home';
import notFound from '../views/notFound';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/" exact={true} component={notFound} />
        </Switch>
    </Router>
);

export default Routes;
