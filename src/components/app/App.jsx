import React, { useState } from 'react';

import { BarList } from '../barList/BarList.jsx';
import { Header } from '../header/Header.jsx';
import { ControlList } from '../controlList/ControlList.jsx';

import './App.scss';

const App = () => {
    const [bars, setBars] = useState([
        {title: 'Здоровье', color: '#e74c3c', quantity: 50, id: 1},
        {title: 'Жажда', color: '#3498db', quantity: 50, id: 2},
        {title: 'Голод', color: '#e67e22', quantity: 50, id: 3},
        {title: 'Усталость', color: '#95a5a6', quantity: 50, id: 4}
    ]);

    const [actions, setActions] = useState([
        {action: 'Есть', color: '#e74c3c', id: 1}, 
        {action: 'Пить', color: '#3498db', id: 2}, 
        {action: 'Отдохнуть', color: '#e67e22', id: 3}, 
        {action: 'Работать', color: '#95a5a6', id: 4}
    ]);

    return (
        <>
            <Header />
            <main className="wrapper">
                <BarList bars={bars} />
                <ControlList actions={actions} />
            </main>
        </>
    );
}

export { App };
