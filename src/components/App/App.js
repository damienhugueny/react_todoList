import React from 'react';

import './app.scss';

import initialTasks from '../../data/tasks';

import Counter from '../Counter/Counter';
import Tasks from '../Tasks/Tasks';
import Form from '../Form/Form';

class App extends React.Component {

    state = {
        // valeur de l'input permettant d'ajouter une tâche
        newTaskValue : '',
    }

    setTaskValue = (newTaskValue) => {
        this.setState({
            //newTaskValue : newTaskValue,
            // strictement équivalent à :
            newTaskValue,
        });
    };

    //addTask = () => {

    //};


    render() {
        // pour renomer:  const { newTaskValue : inputValue } = this.state;
        const { newTaskValue  } = this.state;
        const nbTasksNotDone = initialTasks.filter((task) => !task.done).length;
        const addTask = () => {
            console.log('ajout d\'une tâche');
        };

        return (
            <div className="todo">
                <Form addTask={addTask} value={newTaskValue} />
                <Counter nbTasks={nbTasksNotDone} />
                <Tasks tasks={initialTasks}/>
            </div>
        );
    }

};

export default App;