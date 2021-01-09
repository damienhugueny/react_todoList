import React from 'react';
import PropTypes from 'prop-types'; 

import './form.scss';

const Form = ({ addTask, value }) => {
    const handleSubmit =  (event) => {
        event.preventDefault();

        // event.target représente le form
        console.log(event.target.childNodes[0].value);
        // on on peut récupérer la valeur, mais c'est fragile : notamment, si on
        // ajoute une div entre le form et l'input => BOUMM !!!
        // et en plus, on stocke une valeur dans le DOM, on préfèrerait avoir une seule
        // source de vérité (state), et si l'input veut changer la valeur qu'il affiche,
        // il demanderait la mise à jour du state : composant contrôlé

        addTask();
};

/* Comment récupérer la valeur de input ?
    - onChange sur input
    - valeur de l'input dans un state 

    onChange={() => console.log('onChange')}
*/

    return (

        <form className="form-addTask" 
            onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ajouter une tâche"
                className="input-addTask"
                value={value}
                onChange={() => console.log('onChange')}
            />
        </form>
    )

};

Form.propTypes = {
    addTask : PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Form;