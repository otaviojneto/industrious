import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import Generic from '../views/generic';
import Home from '../views/home';
import notFound from '../views/notFound';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/generic" exact={true} component={Generic} />
            <Route path="/notFound" exact={true} component={notFound} />

            <Redirect path="*" to={'/notFound'} />
        </Switch>
    </Router>
);

export default Routes;
