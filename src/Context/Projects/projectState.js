import React, { useReducer }from 'react';

//context
import ProjectContext from './projectContext';
//reducer
import projectReducer from './projectReducer';

const ProjectState = props => {
    const initialState = {
        newProjectForm : false
    }

    //Dispatch
    const [state, dispatch] = useReducer(projectReducer, initialState)

    //CRUD functions

    return(
        <ProjectContext.Provider
            value={{
                newProjectForm: state.newProjectForm
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;