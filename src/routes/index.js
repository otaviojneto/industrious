import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Generic from '../views/generic';
import Home from '../views/home';
import notFound from '../views/notFound';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/generic" exact={true} component={Generic} />
            <Route path="/notfound" exact={true} component={notFound} />
        </Switch>
    </Router>
);

export default Routes;
