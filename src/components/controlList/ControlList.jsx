import React from 'react';
import PropTypes from 'prop-types';

import { Control } from '../control/Control.jsx';
import { actions } from '../../store.js';

import './ControlList.scss';

const ControlList = ({handleControlClick, handleEnterKeyDown}) => (
    <div className="controllist wrapper__item">
        {actions.map((control) => (
            <Control options={control} key={control.id} handleControlClick={handleControlClick}
                handleEnterKeyDown={handleEnterKeyDown}
            />
        ))}
    </div>
);

ControlList.propTypes = {
    handleControlClick: PropTypes.func.isRequired,
    handleEnterKeyDown: PropTypes.func.isRequired
}

export { ControlList };
