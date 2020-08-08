import React, { useContext } from 'react';

//import contexts
import ProjectContext from '../../Context/Projects/projectContext';
import TaskContext from '../../Context/Tasks/TaskContext';

const EachProjectListLi = ({project}) => {

    //obtain the state of the projects
    const projectsContext = useContext(ProjectContext);
    const { getSelectedProject } = projectsContext;


    const taskContext = useContext(TaskContext)
    const { getTasks } = taskContext

    //function to add the current project
    const selectProject = id => {
        getSelectedProject(id) // get selected project
        getTasks(id) // get the tasks for the project
    }

    return ( 
        <li>
            <button
                type='button'
                className='projectsList__btn btn btn-blank'
                onClick={() => selectProject(project._id)}
            >{project.name}</button>
        </li>
     );
}
 
export default EachProjectListLi;