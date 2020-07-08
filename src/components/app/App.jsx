import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainPage } from '../../pages/mainPage/MainPage.jsx';
import { Routes } from '../../constants.js';

import './App.scss';

const App = () => (
    <Switch>
        <Route path={`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`} component={MainPage} exact />
        <Redirect to={`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`} />
    </Switch>
);

export { App };
