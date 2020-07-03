import React from 'react';

import './Control.scss';

const Control = ({options: {action, color} = {action: "Есть", color: "red"}}) => {
    const controlStyle = {
        backgroundColor: color
    };

    return (
        <div className="control" style={controlStyle}>
            {action}
        </div>
    );
};

export { Control };
