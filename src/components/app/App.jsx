import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainPage } from '../../pages/mainPage/MainPage.jsx';
import { HistoryPage } from '../../pages/historyPage/HistoryPage.jsx';
import { Routes } from '../../constants.js';

import './App.scss';

const App = () => (
    <Switch>
        <Route path={`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`} component={MainPage} exact />
        <Route path={`${process.env.PUBLIC_URL}${Routes.HISTORY_PAGE}`} component={HistoryPage} exact />
        <Redirect to={`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`} />
    </Switch>
);

export { App };
