import React, { Fragment, useState, useContext } from 'react';

//Components
import Error from '../Layout/Error';

//import context
import ProjectContext from '../../Context/Projects/projectContext';

const NewProjectForm = () => {

    //obtain the state of the form
    const projectsContext = useContext(ProjectContext);

    const { newProjectForm, showNewProjectForm } = projectsContext;

    const [ newProject, setNewProject ] = useState({
        newProjectName: ''
    });

    const { newProjectName } = newProject;
    const [ error, setError ] = useState(false);

    //saving the name of the new project
    const inputNewProject = e => {
        setNewProject({
            ...newProject,
            [e.target.name] : e.target.value
        })
    }


     const submitNewProject = e => {
         e.preventDefault();

         //check input has been filled
         if (newProjectName.trim() === '') {
             setError(true)
             return
         }
         setError(false);

     }

    return ( 
        <Fragment>
            <button
                    type='button'
                    className='newProjectForm__btn'
                    onClick={() => showNewProjectForm()}
            >
                Add new project
            </button>  
            
                   
            {
                newProjectForm 
                ? (
                    <form 
                    className='newProjectForm__form'
                    onSubmit={submitNewProject}
                    >
                        <input 
                            type="text"
                            name='newProjectName'
                            placeholder="Name of the Project"
                            className='newProjectForm__input'
                            onChange={inputNewProject}
                            value={newProjectName}
                        /> 
        
                        <input type="submit" className='newProjectForm__btn-submit' value='Add Project'/>
                    </form> 

                )
                : null

            }

                {
                    error ? <Error message={'Enter the project name'}/> : null
                }  
        </Fragment>

     );
}
 
export default NewProjectForm;