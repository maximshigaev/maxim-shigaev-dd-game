import React, { useState } from 'react';

import { BarList } from '../barList/BarList.jsx';
import { Header } from '../header/Header.jsx';
import { ControlList } from '../controlList/ControlList.jsx';
import { TextArea } from '../textArea/TextArea.jsx';
import { Notification } from '../notification/Notification.jsx';
import * as helpers from '../../helpers';
import { initialBars, initialActions } from '../../store';

import './App.scss';

let timeoutId;

const App = () => {
    const [bars, setBars] = useState(initialBars);
    const [actions, setActions] = useState(initialActions);
    const [notification, setNotification] = useState(null);

    const cleanUp = () => {
        setNotification(null);
        clearTimeout(timeoutId);
    }
    
    const notify = (content) => {
        if (notification) {            
            cleanUp();
        }

        setTimeout(() => setNotification(content));

        timeoutId = setTimeout(cleanUp, 5000);
    }

    const controlClickHandler = (evt) => {        
        setBars(helpers.updateBars(bars, evt.target.innerHTML));
        notify(`Действие "${evt.target.innerHTML}" выполнено`);
    }

    return (
        <>
            <Header />
            <main className="wrapper">
                <BarList bars={bars} />
                <ControlList actions={actions} handleClick={controlClickHandler} />
                <TextArea  />
                {notification &&
                    <Notification>
                        {notification}
                    </Notification>
                }
            </main>
        </>
    );
}

export { App };
