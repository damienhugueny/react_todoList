import React from 'react';

import './tasks.scss';

import PropTypes from 'prop-types'; 
import Task from './Task';
// TODO ajouter une class css si done = true
// setDone={(id, newValue) => {console.log(`new value for id=${id} : ${newValue}`);}}

const Tasks = ({ tasks, setDone }) => (
    <div className="tasks">
        <ul className="tasks-list">
            {tasks.map((task) => {

                    return (
                        <Task 
                            key={task.id}
                            {...task}
                            setDone={setDone}

                        /*
                            key={task.id}
                            id={task.id}  
                            label={task.label} 
                            done={task.done}
                        */
                        />
                    );
                }
            )}
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
    setDone: PropTypes.func.isRequired,
};

export default Tasks;