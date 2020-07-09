import React from 'react';
import PropTypes from 'prop-types';

import { ChangedBar } from '../changedBar/ChangedBar.jsx';

import './Action.scss';

const Action = ({action}) => {
    const changedBars = action.changedBars.map((changedBar) => (
        <ChangedBar key={changedBar.barTitle} changedBar={changedBar} />
    ));

    return (
        <>    
            <tr className="row row--main">
                <td className="cell cell--little">№</td>
                <td className="cell cell--medium">Действие</td>
                <td className="cell cell--big">Дата</td>
            </tr>
            <tr className="row">
                <td className="cell cell--little">{action.id}</td>
                <td className="cell cell--medium">{action.title}</td>
                <td className="cell cell--big">{action.date.toLocaleString()}</td>
            </tr>
            <tr className="row row--heading">
                <td className="cell cell--little">Характеристика</td>
                <td className="cell cell--medium">Изменение</td>
                <td className="cell cell--big">Текущее значение</td>
            </tr>
            {changedBars}
        </>
    );
}

Action.propTypes = {
    action: PropTypes.exact({
        title: PropTypes.string.isRequired,
        date: Date,
        id: PropTypes.number.isRequired,
        changedBars: PropTypes.arrayOf(PropTypes.exact({
            barTitle: PropTypes.string.isRequired,
            diff: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        }))
    })
}

export { Action };
