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
        tasks: initialTasks,
    }

    setTaskValue = (newTaskValue) => {
        this.setState({
            //newTaskValue : newTaskValue,
            // strictement équivalent à :
            newTaskValue,
        });
    };

    // get max id + 1 for next id
    computeNextId = () => {
        const { tasks } = this.state;

        // récupérer l'id max du tableau
        /*
        let max = 0;
        tasks.forEach((task) => {
            if (task.id > max) {
                max = task.id;
            }
        });
        */

        // creation d'un nouveau tableau avec tout les Ids
        const ids = tasks.map((task) => task.id);
        // utiliser Math.max sur le tableau pour récupérer l'id le plus grand
        const max = Math.max(...ids);

        return max + 1;
    }
    
    addTask = () => {
        const { tasks } = this.state;
        console.log(`ajout d\'une tâche: ${this.state.newTaskValue}`);

        
        //creer une nouvelle tâche
        // TODO mieux gérer l'id => id max + 1
        const nextId = this.computeNextId();

        console.log(`next Id: ${nextId}`);

        const newTask = {
            id: nextId,
            label: this.state.newTaskValue,
            done: false,
        };

        // l'ajouter au state
        //!!! INTERDIT on ne modifie pas le state directement (il faut appeler setState)
        // Car react ne mettra pas a jour le DOM
        //!!! INTERDIT on ne modifie pas ce qui est stocké dans le state
        // state.tasks.push(.......)

        // la ligne suivante ne crée pas un tableau, elle crée un nouveau lien vers le
        // même tableau (en Javascript les objets et les tableaux sont stockés par
        // référence) => INTERDIT, on modifierait directement le tableau stocké dans
        // le state
        //const newTasksList = this.state.tasks;
        //newTasksList.push(newTask);

        // array.concat pourrait conveznir, il crée bien un nouveau tableau
        //tasks.concat(newTask);

        // créer un nouveau tableau dans lequel on déverse les éléments
        //const tabB = [...tabA];

        //const newTasks = [...tasks, newTask]

        this.setState({
        // ajouter la nouvelle tâche => remplacer le tableau
        tasks : [...tasks, newTask],
        // pour un objet => { ... } au lieu [ ... ]
        // vider le champ
        newTaskValue: '',
        });
       
    };

    updateTask = (id, newValue) => {

        const { tasks } = this.state;

        // nouveau tableau, dans lequel on va remplacer une tâche
        const newTasks = tasks.map((task) => {
            if (task.id === id){
                // IMPORTANT je ne modifie pas l'objet, je le remplace
                /*
                    {
                        id,
                        label,
                        done
                    }
                */
                return {
                    //id: task.id,
                    //label: task.label,
                    //done: newValue,

                    //mieux:
                    ...task,
                    done: newValue
                };
            }
            // sinon retourner la tâche telle quel('esle' est falcultatif à cause du return )
            return task;
        });

        // mettre a jour le state
        this.setState({
            tasks: newTasks,
        });

        console.log(`new value for id=${id} : ${newValue}`);
    };


    render() {
        // pour renomer:  const { newTaskValue : inputValue } = this.state;
        const { newTaskValue, tasks } = this.state;

        // récupère les tâches qui sont différentes de true
        const nbTasksNotDone = tasks.filter((task) => !task.done).length;

        return (
            <div className="todo">
                <Form addTask={this.addTask} setValue={this.setTaskValue} value={newTaskValue} />
                <Counter nbTasks={nbTasksNotDone} />
                <Tasks tasks={tasks} setDone={this.updateTask}/>
            </div>
        );
    }

};

export default App;