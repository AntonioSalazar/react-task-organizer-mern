import React, { useContext, useState } from 'react';

//import context
import ProjectContext from '../../Context/Projects/projectContext';
import TaskContext from '../../Context/Tasks/TaskContext'

const FormNewTask = () => {

    //obtain the state if there is an active project
    const projectsContext = useContext(ProjectContext);
    const { selectedProject } = projectsContext;

    // extracting the error from the context state
    const stateContext = useContext(TaskContext)
    const { errorForm } = stateContext
    
    //state of the form input 
    const [ newTask, setNewTask ] = useState({
        taskName: ''
    })

    const { taskName } = newTask;
    //if there is no selected project
    if(!selectedProject) return null



    //array destructuring
    const [currentProject] = selectedProject

    const inputNewTask = e => {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value
        })
    }

    //On submit
    const onSubmit = e => {
        e.preventDefault();

        // validate the form has been filled


        // pass the validation

        //add the new task
    }
     
    return ( 
        <div className="newTask">
            <form
                 className="newTaskForm"
                 onSubmit={onSubmit}
            >
                <h3 className="newTaskForm__title">Add a new Task</h3>
                <div className="newTaskForm__input">
                    <input type="text"
                            className='newTaskForm__input-name'
                            name="taskName" 
                            id="newTask"
                            placeholder='Task name'
                            onChange={inputNewTask}
                            value={taskName}
                    />

                    <input type="submit" value='Add task' className='newTaskForm__input-btn'/>
                </div>

            </form>
        </div>
     );
}
 
export default FormNewTask;