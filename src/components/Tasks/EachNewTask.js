import React from 'react';

const EachNewTask = ({task}) => {
    return ( 
        <li className='listNewTasks__tasks-li'>
            <p>{task.name}</p>
            <div className='listNewTasks__tasks-state'>
                {task.state
                ?
                    (
                        <button
                            type='button'
                            className='listNewTasks__tasks-state-complete'
                        >
                            Complete
                        </button>
                    )
                : 

                (
                    <button
                        type='button'
                        className='listNewTasks__tasks-state-incomplete'
                    >
                        Incomplete
                    </button>
                )
                }
                
            </div>

            <div
                className='listNewTasks__tasks-edit'
            >
                <button
                    type='button'
                    className='listNewTasks__tasks-edit-edit'
                >Edit</button>
                <button
                    type='button'
                    className='listNewTasks__tasks-edit-delete'
                >Delete</button>
            </div>
        </li>
     );
}
 
export default EachNewTask;