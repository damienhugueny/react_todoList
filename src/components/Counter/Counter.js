import React from 'react';

import './counter.scss';

import PropTypes from 'prop-types'; 

const Counter = ({ number }) => (
    <div className="counter">{number} tâches en cours</div>
);

Counter.prototype = {
    number: PropTypes.number.isRequired,
};

export default Counter;