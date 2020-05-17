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
                        >
                            Complete
                        </button>
                    )
                : 

                (
                    <button
                        type='button'
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
                >Edit</button>
                <button
                    type='button'
                >Delete</button>
            </div>
        </li>
     );
}
 
export default EachNewTask;