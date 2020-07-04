import React from 'react';
import PropTypes from 'prop-types';

import { Control } from '../control/Control';
import './ControlList.scss';

const ControlList = ({actions, handleClick}) => (
    <div className="controllist wrapper__item">
        {actions.map((control) => <Control options={control} key={control.id} handleClick={handleClick} />)}
    </div>
);

ControlList.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        action: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })),
    handleClick: PropTypes.func.isRequired
}

export { ControlList };
