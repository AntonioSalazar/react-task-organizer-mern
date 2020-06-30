import React from 'react';

const EachProjectListLi = ({project}) => {
    return ( 
        <li>
            <button
                type='button'
                className='projectsList__btn btn btn-blank'
            >{project.newProjectName}</button>
        </li>
     );
}
 
export default EachProjectListLi;