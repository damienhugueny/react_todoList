import React from 'react';

import './app.scss';

import tasksList from '../../data/tasks';

import Counter from '../Counter/Counter';
import Tasks from '../Tasks/Tasks';

class App extends React.Component {

    constructor(props) {
        super(props);
    
    }

    state = {
        task : '',
    };

    countTasks = () => {
        console.log(tasksList);
        const tasksTodo = tasksList.filter(data => data.done === false);
        const numberOfTask = tasksTodo.length;
        console.log(`nombre de tâches : ${numberOfTask}`);
        return numberOfTask;
    }

    render() {

        const resultTasks = this.countTasks();

        return (
            <div className="app">
                <div>Form</div>
                <Counter number={resultTasks} />
                <Tasks tasks={tasksList}/>
            </div>
        );
    }

};

export default App;