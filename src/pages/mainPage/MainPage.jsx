import React, { useState } from 'react';

import { BarList } from '../../components/barList/BarList.jsx';
import { Header } from '../../components/header/Header.jsx';
import { ControlList } from '../../components/controlList/ControlList.jsx';
import { TextArea } from '../../components/textArea/TextArea.jsx';
import { initialBars, initialActions } from '../../store';
import * as helpers from '../../helpers';
import { Notification } from '../../components/notification/Notification.jsx';

let timeoutId;

const MainPage = () => {
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
