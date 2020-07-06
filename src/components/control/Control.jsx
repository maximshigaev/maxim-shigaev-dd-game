import React from 'react';
import PropTypes from 'prop-types';

import './Control.scss';

const Control = ({options: {action, modifier}, handleClick}) => {
    const enterPressHandler = (evt) => {        
        if (evt.keyCode === 13) {
            handleClick(evt);
        }
    }

    return (
        <div className={`control controllist__item control--${modifier}`} tabIndex={0} onClick={handleClick}
            onKeyDown={enterPressHandler}
        >
            {action}
        </div>
    );
}

Control.propTypes = {
    options: PropTypes.exact({
        action: PropTypes.string.isRequired,
        modifier: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
}

export { Control };
