import React, { useState, useEffect } from 'react';

import { BarList } from '../../components/barList/BarList.jsx';
import { Header } from '../../components/header/Header.jsx';
import { ControlList } from '../../components/controlList/ControlList.jsx';
import { TextArea } from '../../components/textArea/TextArea.jsx';
import { initialBars, initialActions } from '../../store.js';
import * as helpers from '../../helpers.js';
import { Notification } from '../../components/notification/Notification.jsx';

let timeoutId;
let appliedActionId = 0;

const MainPage = () => {
    const [bars, setBars] = useState(initialBars);
    const [actions, setActions] = useState(initialActions);
    const [notification, setNotification] = useState(null);
    
    const cleanUp = () => {
        setNotification(null);
        clearTimeout(timeoutId);
    }

    useEffect(() => () => cleanUp(), []);
    
    const notify = (content) => {
        if (notification) {            
            cleanUp();
        }

        setTimeout(() => setNotification(content));

        timeoutId = setTimeout(cleanUp, 5000);
    }

    const controlClickHandler = (evt) => {    
        const action = {
            title: evt.target.innerHTML,
            date: new Date(),
            id: ++appliedActionId
        }

        setBars(helpers.updateBars(bars, action));
        notify(`Действие "${evt.target.innerHTML}" выполнено`);
    }

    return (
        <>
            <Header />
            <main className="wrapper">
                <BarList bars={bars} />
                <ControlList actions={actions} handleClick={controlClickHandler} />
                <TextArea  />
            </main>
            {notification &&
                <Notification>
                    {notification}
                </Notification>
            }
        </>
    );
}

export { MainPage };
