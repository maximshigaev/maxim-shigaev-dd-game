import React from 'react';
import PropTypes from 'prop-types';

import { Control } from '../control/Control';

import './ControlList.scss';

const ControlList = ({actions, handleControlClick, handleEnterKeyDown}) => (
    <div className="controllist wrapper__item">
        {actions.map((control) => (
            <Control options={control} key={control.id} handleControlClick={handleControlClick}
                handleEnterKeyDown={handleEnterKeyDown}
            />
        ))}
    </div>
);

ControlList.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.exact({
        action: PropTypes.string.isRequired,
        modifier: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired,
    handleControlClick: PropTypes.func.isRequired,
    handleEnterKeyDown: PropTypes.func.isRequired
}

export { ControlList };
