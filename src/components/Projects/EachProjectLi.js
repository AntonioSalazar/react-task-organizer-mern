import React, { useContext } from 'react';

//import context
import ProjectContext from '../../Context/Projects/projectContext';

const EachProjectListLi = ({project}) => {

    //obtain the state of the projects
    const projectsContext = useContext(ProjectContext);

    const { getSelectedProject } = projectsContext;
    
    return ( 
        <li>
            <button
                type='button'
                className='projectsList__btn btn btn-blank'
                onClick={() => getSelectedProject(project.id)}
            >{project.newProjectName}</button>
        </li>
     );
}
 
export default EachProjectListLi;