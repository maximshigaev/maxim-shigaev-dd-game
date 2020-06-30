import React from 'react';

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

export { Bar };
