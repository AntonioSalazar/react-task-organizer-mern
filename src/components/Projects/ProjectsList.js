import React from 'react';

//Components
import EachProjectListLi from './EachProjectLi';

const projects = [
    {name : 'Intranet'},
    {name : 'Deploy'},
    {name : 'Production'}
]

const ProjectsList = () => {
    return ( 
        <ul className="projectsList">
            {
                projects.map( project => (
                    <EachProjectListLi
                        project={project}
                    />
                ))
            }
        </ul>
     );
}
 
export default ProjectsList;