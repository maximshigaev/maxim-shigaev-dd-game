import React from 'react';

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

export { Control };
