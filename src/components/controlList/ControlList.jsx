import React from 'react';

import { Control } from '../control/Control';
import './ControlList.scss';

const ControlList = ({actions, handleClick}) => {
    return (
        <div className="controllist wrapper__item">
            {actions.map((control) => <Control options={control} key={control.id} handleClick={handleClick} />)}
        </div>
    );
}

export { ControlList };
