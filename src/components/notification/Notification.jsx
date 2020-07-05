import React from 'react';
import PropTypes from 'prop-types';

import './Notification.scss';

const Notification = ({children}) => (
    <div className="notification">
        {children}
    </div>
);

Notification.propTypes = {
    children: PropTypes.string.isRequired
}

export { Notification };
