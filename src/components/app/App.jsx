import React, { useState } from 'react';

import { BarList } from '../barList/BarList.jsx';
import { Header } from '../header/Header.jsx';
import { ControlList } from '../controlList/ControlList.jsx';
import { TextArea } from '../textArea/TextArea.jsx';
import * as helpers from '../../helpers';
import { initialBars, initialActions } from '../../store';

import './App.scss';

const App = () => {
    const [bars, setBars] = useState(initialBars);
    const [actions, setActions] = useState(initialActions); 

    const controlClickHandler = (evt) => setBars(helpers.updateBars(bars, evt.target.innerHTML));

    return (
        <>
            <Header />
            <main className="wrapper">
                <BarList bars={bars} />
                <ControlList actions={actions} handleClick={controlClickHandler} />
                <TextArea  />
            </main>
        </>
    );
}

export { App };
