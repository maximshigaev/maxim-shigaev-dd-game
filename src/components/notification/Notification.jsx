import React from 'react';
import PropTypes from 'prop-types';

import './Notification.scss';

const Notification = ({children, mode}) => (
    <div className="notification" style={(mode === "error") ? {backgroundColor: `red`, color: `white`} : {}}>
        {children}
    </div>
);

Notification.propTypes = {
    children: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
}

export { Notification };
