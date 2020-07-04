import React from 'react';
import PropTypes from 'prop-types';

import './Control.scss';

const Control = ({options: {action, modifier}, handleClick}) => (
    <div className={`control controllist__item control--${modifier}`} tabIndex={0} onClick={handleClick}>
        {action}
    </div>
);

Control.propTypes = {
    options: PropTypes.shape({
        action: PropTypes.string.isRequired,
        modifier: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
}

export { Control };
