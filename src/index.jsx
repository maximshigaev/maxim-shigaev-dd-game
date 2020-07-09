import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './reset.scss';
import './scaffolding.scss';
import { App } from './components/app/App.jsx';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary.jsx';

ReactDOM.render(
    <ErrorBoundary>
        <Router>
            <App />
        </Router>
    </ErrorBoundary>,
    document.getElementById('root')
);
