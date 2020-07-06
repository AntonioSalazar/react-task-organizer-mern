import React, { useContext } from 'react';

//import context
import ProjectContext from '../../Context/Projects/projectContext';

const FormNewTask = () => {

    //obtain the state if there is an active project
    const projectsContext = useContext(ProjectContext);

    const { selectedProject } = projectsContext;

    //if there is no selected project
    if(!selectedProject) return null

    //array destructuring
    const [currentProject] = selectedProject
     
    return ( 
        <div className="newTask">
            <form
                 className="newTaskForm"
            
            >
                <h3 className="newTaskForm__title">Add a new Task</h3>
                <div className="newTaskForm__input">
                    <input type="text"
                            className='newTaskForm__input-name'
                            name="newTaskName" 
                            id="newTask"
                            placeholder='Task name'
                            // onChange
                            // value
                    />

                    <input type="submit" value='Add task' className='newTaskForm__input-btn'/>
                </div>

            </form>
        </div>
     );
}
 
export default FormNewTask;