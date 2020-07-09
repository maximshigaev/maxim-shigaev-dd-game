import React from 'react';
import PropTypes from 'prop-types';

import { Bar } from '../bar/Bar';
import './BarList.scss';

const BarList = ({bars}) => (
    <div className="barlist wrapper__item">
        {bars.map((bar) => <Bar options={bar} key={bar.id} />)}
    </div>
);

BarList.propTypes = {
    bars: PropTypes.arrayOf(PropTypes.exact({
        title: PropTypes.string.isRequired,
        modifier: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
}

export { BarList };
