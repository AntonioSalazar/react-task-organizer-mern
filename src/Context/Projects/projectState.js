import React, { useReducer }from 'react';

//context
import ProjectContext from './projectContext';
//reducer
import projectReducer from './projectReducer';
//Types
import { FORM_PROJECT } from '../../types/index';

const ProjectState = props => {
    const initialState = {
        newProjectForm : false
    }

    //Dispatch
    const [state, dispatch] = useReducer(projectReducer, initialState)

    //CRUD functions


    //function that will show the new project form
    const showNewProjectForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }


    return(
        <ProjectContext.Provider
            value={{
                newProjectForm: state.newProjectForm,
                showNewProjectForm
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;