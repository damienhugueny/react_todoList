import React from 'react';
import PropTypes from 'prop-types'; 

import './form.scss';

const Form = () => {

    return (

        <form className="form-addTask">
            <input
                type="text"
                placeholder="Ajouter une tâche"
                className="input-addTask"
            />
        </form>
    )

};

export default Form;