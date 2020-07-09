import React from 'react';
import PropTypes from 'prop-types';

import './Control.scss';

const Control = ({options: {action, modifier}, handleControlClick, handleEnterKeyDown}) => {
    const enterKeyDownHandler = (evt) => {        
        if (evt.keyCode === 13) {
            handleEnterKeyDown(evt);
        }
    }

    return (
        <div className={`control controllist__item control--${modifier}`} tabIndex={0} onClick={handleControlClick}
            onKeyDown={enterKeyDownHandler}
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
    }).isRequired,
    handleControlClick: PropTypes.func.isRequired,
    handleEnterKeyDown: PropTypes.func.isRequired
}

export { Control };
