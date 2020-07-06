import React, { useReducer }from 'react';
import { v4 as uuidv4 } from 'uuid';

//context
import ProjectContext from './projectContext';
//reducer
import projectReducer from './projectReducer';
//Types
import { FORM_NEW_PROJECT,
         GET_PROJECTS_SIDEBAR, 
         ADD_NEW_PROJECT, 
         VALIDATE_FORM,
         GET_SELECTED_PROJECT
        } from '../../types/index';


const ProjectState = props => {
    const projects = [
        {id: 1, newProjectName : 'Intranet'},
        {id: 2, newProjectName : 'Deployment'},
        {id: 3, newProjectName : 'Production'}
    ]
    const initialState = {
        newProjectForm : false,
        projects : [],
        errorForm : false,
        currentProject : null,
        selectedProject: null
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

    //get the projects
    const getProjectsSideBar = () => {
        dispatch({
            type: GET_PROJECTS_SIDEBAR,
            payload: projects
        })
    }

    //Add new project
    const addNewProject = project => {
        project.id = uuidv4();

        //project intto the state
        dispatch({
            type: ADD_NEW_PROJECT,
            payload: project
        })
    }

    //VALIDATE FORM
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    // get selected project

    const getSelectedProject = projectId => {
        dispatch({
            type: GET_SELECTED_PROJECT,
            payload: projectId
        })
    }


    return(
        <ProjectContext.Provider
            value={{
                newProjectForm: state.newProjectForm,
                currentProject: state.currentProject,
                projects: state.projects,
                errorForm : state.errorForm,
                selectedProject: state.selectedProject,
                showNewProjectForm,
                getProjectsSideBar,
                addNewProject,
                showError,
                getSelectedProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;