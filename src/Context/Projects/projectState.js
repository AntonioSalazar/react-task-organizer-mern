import React, { useReducer }from 'react';

//context
import ProjectContext from './projectContext';
//reducer
import projectReducer from './projectReducer';
//Types
import { FORM_NEW_PROJECT,
         GET_PROJECTS_SIDEBAR, 
         ADD_NEW_PROJECT, 
         VALIDATE_FORM,
         GET_SELECTED_PROJECT,
         DELETE_PROJECT
        } from '../../types/index';

import axiosClient from '../../config/axios'


const ProjectState = props => {

    const initialState = {
        newProjectForm : false,
        projects : [],
        errorForm : false,
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
    const getProjectsSideBar = async () => {
        try {
            const result = await axiosClient.get('/api/projects');

            dispatch({
                type: GET_PROJECTS_SIDEBAR,
                payload: result.data.projects
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Add new project
    const addNewProject = async project => {

        try {
            const result = await axiosClient.post('/api/projects', project)
            dispatch({
                type: ADD_NEW_PROJECT,
                payload: result.data
            })
        } catch (error) {
            console.log(error);
        }
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

    // delete project

    const deleteCurrentProject = async projectId => {
        try {
            await axiosClient.delete(`/api/projects/${projectId}`)
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            })
        } catch (error) {
            console.log(error);
        }
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
                getSelectedProject,
                deleteCurrentProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;