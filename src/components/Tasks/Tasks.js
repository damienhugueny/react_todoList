import React from 'react';

import './tasks.scss';

import PropTypes from 'prop-types'; 

// TODO ajouter une class css si done = true

const Tasks = ({ tasks }) => (
    <div className="tasks">
        <ul className="tasks-list">
            {tasks.map((task) => (
       
                <li key={task.id} className="task-title">
                    <input className="input-checkbox" type="checkbox" name="task"/>
                    {task.label}
                </li>
            ))}
        </ul>
    </div>
);

Tasks.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
        }).isRequired,
    ).isRequired,


};

export default Tasks;