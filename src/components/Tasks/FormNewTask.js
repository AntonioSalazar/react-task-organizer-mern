import React, { useContext, useState } from 'react';
//components
import Error from '../Layout/Error'

//import context
import ProjectContext from '../../Context/Projects/projectContext';
import TaskContext from '../../Context/Tasks/TaskContext'

const FormNewTask = () => {

    //obtain the state if there is an active project
    const projectsContext = useContext(ProjectContext);
    const { selectedProject } = projectsContext;

    // extracting the error from the context state
    const taskContext = useContext(TaskContext)
    const { validateTask, addNewTask, errorForm } = taskContext
    
    //state of the form input 
    const [ newTask, setNewTask ] = useState({
        name: ''
    })
    //extract the name of the project
    const { name } = newTask;
    
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
        if(name.trim() === ''){
            validateTask(true)
            return
        }
        
        // pass the validation
        validateTask(false)

        //add the new task to the state
        newTask.projectId = currentProject.id;
        newTask.state = false;
        console.log(currentProject);
        addNewTask(newTask);
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
                            name="name" 
                            id="newTask"
                            placeholder='Task name'
                            onChange={inputNewTask}
                            value={name}
                    />

                    <input type="submit" value='Add task' className='newTaskForm__input-btn'/>
                </div>
            {
                errorForm ? <p message={'You need to enter a task'}/> : null
            }
            </form>

        </div>
     );
}
 
export default FormNewTask;