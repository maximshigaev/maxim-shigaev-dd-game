import React from 'react';

import { Control } from '../control/Control';
import './ControlList.scss';

const ControlList = ({actions}) => {
    return (
        <div className="controllist">
            {actions.map((control) => <Control options={control} key={control.id} />)}
        </div>
    );
}

export { ControlList };
