import React, { useContext, useState, useEffect } from 'react';
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
    const { validateTask, addNewTask, errorForm, getTasks, selectedTask, updateSelectedTask, cleanTask } = taskContext

    //This useEffect will detect when a task gets selected
    useEffect(() => {
        if(selectedTask !== null) {
            setNewTask(selectedTask)
        } else {
            setNewTask({
                name: ''
            })
        }
    }, [selectedTask])
    
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

        //check if its an task edit or a new task
        if(selectedTask === null ){
            //new task       
            //add the new task to the state
            newTask.project = currentProject._id;
        
            addNewTask(newTask);
        } else {
            //update existing task
            updateSelectedTask(newTask)

            //delete selected task from the state
            cleanTask()
        }
        
        // // pass the validation
        // validateTask(false)



        //get and filter the tasks of selceted project

        getTasks(currentProject.id)

        //form to blanck after adding a task
        setNewTask({
            name: ''
        })
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

                    <input type="submit" value={selectedTask ? 'Edit Task' : 'Add a new task'} className='newTaskForm__input-btn'/>
                </div>
            {
                errorForm ? <Error message={'You need to enter a task'}/> : null
            }
            </form>

        </div>
     );
}
 
export default FormNewTask;