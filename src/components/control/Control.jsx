import React from 'react';
import PropTypes from 'prop-types';

import './Control.scss';

const Control = ({options: {action, color}, handleClick}) => {
    const controlStyle = {
        backgroundColor: color,
        boxShadow: `0 0 3px ${color}`
    };

    return (
        <div className="control controllist__item" style={controlStyle} onClick={handleClick}>
            {action}
        </div>
    );
};

Control.propTypes = {
    options: PropTypes.shape({
        action: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
}

export { Control };
