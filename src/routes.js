import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import newForm from './pages/newForm';
import history from './history';

const Routes = () => (
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/users/:id" component={newForm} />
            <Route path="/new" component={newForm} />
        </Switch>
    </BrowserRouter>
);

export default Routes;