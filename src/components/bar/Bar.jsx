import React from 'react';
import PropTypes from 'prop-types';

import './Bar.scss';

const Bar = ({options: {title, modifier, quantity}}) => (
    <div className={`bar bar--${modifier}`}>
        <h2 className="bar__title">{title}:</h2>
        <div className="bar__line" title={quantity}>
            <div className="bar__line bar__line--filled" style={{width: `${quantity}%`}}></div>
        </div>
    </div>
);

Bar.propTypes = {
    options: PropTypes.exact({
        title: PropTypes.string.isRequired,
        modifier: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}

export { Bar };
