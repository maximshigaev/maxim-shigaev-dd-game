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
let isNotificationError = false;

const MainPage = () => {
    const [bars, setBars] = useState(initialBars);
    const [actions, setActions] = useState(initialActions);
    const [notification, setNotification] = useState(null);
    
    const cleanUp = () => {
        setNotification(null);
        clearTimeout(timeoutId);
    }

    useEffect(() => () => cleanUp(), []);
    
    const notify = (content, isError = false) => {
        isNotificationError = isError;

        if (notification) {            
            cleanUp();
        }

        setTimeout(() => setNotification(content));

        timeoutId = setTimeout(cleanUp, 5000);
    }

    const handleCommandRun = (evt, isMultiple = false) => {
        const action = {
            title: evt.target.innerHTML,
            date: new Date(),
            id: ++appliedActionId
        }

        setBars(helpers.updateBars(bars, action));

        if (!isMultiple) {
            notify(`Действие "${evt.target.innerHTML}" выполнено`);
        }
    }

    return (
        <>
            <Header />
            <main className="wrapper">
                <BarList bars={bars} />
                <ControlList actions={actions} handleControlClick={handleCommandRun}
                    handleEnterKeyDown={handleCommandRun}
                />
                <TextArea handleEnterKeyDown={handleCommandRun} notify={notify} />
            </main>
            {notification &&
                <Notification mode={isNotificationError ? `error` : `ok`}>
                    {notification}
                </Notification>
            }
        </>
    );
}

export { MainPage };
