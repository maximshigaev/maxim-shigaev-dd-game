import React from 'react';

import { Bar } from '../bar/Bar';
import './BarList.scss';

const BarList = ({bars}) => {
    return (
        <div className="barlist wrapper__item">
            {bars.map((bar) => <Bar options={bar} key={bar.id} />)}
        </div>
    );
}

export { BarList };
