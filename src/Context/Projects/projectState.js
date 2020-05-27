import React, { useReducer }from 'react';

//context
import ProjectContext from './projectContext';
//reducer
import projectReducer from './projectReducer';
//Types
import { FORM_NEW_PROJECT } from '../../types/index';

const ProjectState = props => {
    const initialState = {
        newProjectForm : false,
        projects : [
            {id: 1, name : 'Intranet'},
            {id: 2, name : 'Deployment'},
            {id: 3, name : 'Production'}
        ]
    }

    //Dispatch
    const [state, dispatch] = useReducer(projectReducer, initialState)

    //CRUD functions


    //function that will show the new project form
    const showNewProjectForm = () => {
        dispatch({
            type: FORM_NEW_PROJECT
        })
    }


    return(
        <ProjectContext.Provider
            value={{
                newProjectForm: state.newProjectForm,
                showNewProjectForm,
                projects: state.projects
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;