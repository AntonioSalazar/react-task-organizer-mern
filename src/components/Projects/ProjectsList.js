import React, { useContext, useEffect } from 'react';

//Components
import EachProjectListLi from './EachProjectLi';

//Context 
import ProjectContext from '../../Context/Projects/projectContext';


const ProjectsList = () => {

    const projectContext = useContext(ProjectContext);
    //taking out the projects from the context
    const { projects,  getProjectsSideBar} = projectContext;

    //get projects when the component loads
    useEffect(() => {
        getProjectsSideBar();     
        
        //eslint-disable-next-line
    }, [])

    //checking if the project array is empty
    if (projects.length === 0) return <p className='projectsList__no-project'>You dont have any project, you can start by adding one</p>;

    

    return ( 
        <ul className="projectsList">
            {
                projects.map( project => (
                    <EachProjectListLi
                        key={project.id}
                        project={project}
                    />
                ))
            }
        </ul>
     );
}
 
export default ProjectsList;