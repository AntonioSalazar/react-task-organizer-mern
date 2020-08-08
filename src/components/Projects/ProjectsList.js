import React, { useContext, useEffect } from 'react';

//Components
import EachProjectListLi from './EachProjectLi';

//Context 
import ProjectContext from '../../Context/Projects/projectContext';
import alertContext from '../../Context/Alerts/alertContext';


const ProjectsList = () => {

    const projectContext = useContext(ProjectContext);
    //taking out the projects from the context
    const { projects,  getProjectsSideBar, message } = projectContext;

    const AlertContext = useContext(alertContext);
    const { alert, showAlert } = AlertContext;

    //get projects when the component loads
    useEffect(() => {
        //shows an alert if there is an error
        if(message){
            showAlert(message.msg, message.category)
        }
        getProjectsSideBar();     
        
        //eslint-disable-next-line
    }, [message])

    //checking if the project array is empty
    if (projects.length === 0) return <p className='projectsList__no-project'>You dont have any project, you can start by adding one</p>;

    

    return ( 
        <ul className="projectsList">
            {
                alert ? 
                    (
                    <div className={`alert ${alert.category}`}>{alert.msg}</div>
                    )
                : null
            }
            {
                projects.map( project => (
                    <EachProjectListLi
                        key={project._id}
                        project={project}
                    />
                ))
            }
        </ul>
     );
}
 
export default ProjectsList;