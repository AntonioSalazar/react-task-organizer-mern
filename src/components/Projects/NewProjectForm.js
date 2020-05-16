import React, { Fragment, useState } from 'react';

//Components
import Error from '../Layout/Error';

const NewProjectForm = () => {

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

         console.log(newProject);
     }

    return ( 
        <Fragment>
            <button
                    type='button'
                    className='newProjectForm__btn'
            >
                Add new project
            </button>         
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
            {
                error ? <Error message={'Enter the project name'}/> : null
            }  
        </Fragment>

     );
}
 
export default NewProjectForm;