import React from 'react';

import { Header } from '../../components/header/Header.jsx';
import { Action } from '../../components/action/Action.jsx';
import { appliedActions } from '../../store.js';

import './HistoryPage.scss';

const HistoryPage = () => {
    return (
        <>
            <Header />
            <main className="wrapper">
                <h1 className="heading">История действий</h1>
                <table className="table">
                    <tbody className="tbody">
                        {appliedActions.map((action) => <Action key={action.id} action={action} />)}
                    </tbody>
                </table>
            </main>
        </>
    );
}

export { HistoryPage };
