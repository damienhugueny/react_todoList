import React from 'react';

import './counter.scss';

import PropTypes from 'prop-types'; 

const Counter = ({ nbTasks }) => {

    // let text;
    // if(nbTasks > 1){
    //     text = `${nbTasks} tâches en cours`;
    // }
    // else{
    //     text = `${nbTasks} tâche en cours`;
    // }

    // return (
    //     <p className="counter">{text}</p>
    // );

    const text = nbTasks > 1 ? `${nbTasks} tâches` : `${nbTasks} tâche`;

    return (
        <p className="counter">{text} en cours</p>
    );
}

Counter.prototype = {
    nbTasks: PropTypes.number.isRequired,
};

export default Counter;