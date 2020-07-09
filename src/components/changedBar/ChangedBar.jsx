import React from 'react';
import PropTypes from 'prop-types';

const ChangedBar = ({changedBar}) => (
    <tr className="row">
        <td className="cell cell--little">{changedBar.barTitle}</td>
        <td className="cell cell--medium">{changedBar.diff}</td>
        <td className="cell cell--big">{changedBar.quantity}</td>
    </tr>
);

ChangedBar.propTypes = {
    changedBar: PropTypes.exact({
        barTitle: PropTypes.string.isRequired,
        diff: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired
}

export { ChangedBar };
