import React from 'react';
import PropTypes from 'prop-types';

import './Bar.scss';

const Bar = ({options: {title, color, quantity}}) => {
    const filledBarStyle =  {
        backgroundColor: color,
        width: `${quantity}%`
    };

    return (
        <div className="bar">
            <h2 className="bar__title">{title}:</h2>
            <div className="bar__line">
                <div className="bar__line bar__line--filled" style={filledBarStyle}></div>
            </div>
        </div>
    );
}

Bar.propTypes = {
    options: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    })
}

export { Bar };
