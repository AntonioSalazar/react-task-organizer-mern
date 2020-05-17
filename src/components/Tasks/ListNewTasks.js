import React, { Fragment } from 'react';


//Components 
import EachNewTask from './EachNewTask';

const ListNewTasks = () => {

    const newTasksTest = [
        { name: 'Meeting 1', id: 1, state: true},
        { name: 'Meeting 2', id: 2, state: false},
        { name: 'Meeting 3', id: 3, state: true}
    ]

    return ( 
        <Fragment className='listNewTasks'>
            <h2 className='listNewTasks__title'>Project: Intranet</h2>
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

                <button type='button'>Delete Project &times;</button>

            </ul>
        </Fragment>
     );
}
 
export default ListNewTasks;