import React, { Fragment, useContext } from 'react';

//import context
import ProjectContext from '../../Context/Projects/projectContext';

//Components 
import EachNewTask from './EachNewTask';

const ListNewTasks = () => {

    //obtain the state of the projects
    const projectsContext = useContext(ProjectContext);

    const { selectedProject, deleteCurrentProject } = projectsContext;
    
    //if there is no selected project
    if(!selectedProject) return <h2 className='listNewTasks__no-project' >Select a project</h2>

    //array destructuring
    const [currentProject] = selectedProject



    const newTasksTest = [
        { name: 'Meeting 1', id: 1, state: true},
        { name: 'Meeting 2', id: 2, state: false},
        { name: 'Meeting 3', id: 3, state: true}
    ]


    return ( 
        <Fragment >
            <h2 className='listNewTasks__title'>Project: {currentProject.newProjectName}</h2>
            <ul className='listNewTasks__tasks'>
                {
                    newTasksTest.length === 0
                    ? (<li><p>There are no tasks</p></li>)

                    :
                    newTasksTest.map(task => (
                        <EachNewTask
                            className='listNewTasks__tasks'
                            key={task.id}
                            task={task}
                        />
                    ))
                    
                }

                <button 
                    type='button' 
                    className='listNewTasks__deleteProject' 
                    onClick={() => deleteCurrentProject(currentProject.id)}
                >Delete Project &times;</button>

            </ul>
        </Fragment>
     );
}
 
export default ListNewTasks;