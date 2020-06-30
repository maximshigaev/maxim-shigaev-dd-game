import React, { useState } from 'react';

import { BarList } from '../barList/BarList.jsx';
import './App.scss';

const App = () => {
    const [bars, setBars] = useState([
        {title: 'Здоровье', color: '#e74c3c', quantity: 50, id: 1},
        {title: 'Жажда', color: '#3498db', quantity: 50, id: 2},
        {title: 'Голод', color: '#e67e22', quantity: 50, id: 3},
        {title: 'Усталость', color: '#95a5a6', quantity: 50, id: 4}
    ]);

    return (
        <div className="wrapper">
            <BarList bars={bars} />
        </div>
    );
}

export { App };
