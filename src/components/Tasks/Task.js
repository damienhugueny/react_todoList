import React from'react';
import PropTypes from 'prop-types';

// librairie pour assembler des noms de classes conditionnellement
// yarn add classnames
import classNames from 'classnames';

const Task = ({ id, done, label, setDone }) => {

    /*
    let classCss = 'taskContainer';
    if(done) {
        classCss = 'taskContainer--done';
    }
    */

    // avec la librairie classNames je peux faire cela :
    const classCss = classNames('taskContainer', {'taskContainer--done': done});
    const checkboxId = `checkbox-${id}`;

    const handleChange = (event) => {
        //console.log(event.target.checked);
        setDone(id, event.target.checked)
    };

    return (
        <li  className={classCss}>
        <input 
            className="input-checkbox" 
            type="checkbox"
            checked={done} 
            id={checkboxId}
            onChange={handleChange}
        />
        <label className="taskLabel" htmlFor={checkboxId}>{label}</label>
    </li>
    );
}

Task.prototype = {
    id: PropTypes.number.isRequired,
    label : PropTypes.string.isRequired,
    done: PropTypes.bool,
}

//si des props ne sont pas obligatoires, il faut définir leur valeur par défaut
// si je definis pas la valeur, done est à false
Task.defaultProps = {
    done: false
};

export default Task;