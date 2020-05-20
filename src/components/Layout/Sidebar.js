import React from 'react';

//components
import NewProjectForm from '../Projects/NewProjectForm';
import ProjectsList from '../Projects/ProjectsList';





const Sidebar = () => {
    return ( 
        <aside className='sidebar'>
            <h2 className='sidebar__name'>Task <span>Organizer</span></h2>

            <div className="sidebar__projects">
                <div className='newProjectForm'>
                    <NewProjectForm

                    />
                </div>
            </div>
            <h2 >Your Projects</h2>
            <ProjectsList />
        </aside>
     );
}
 
export default Sidebar;