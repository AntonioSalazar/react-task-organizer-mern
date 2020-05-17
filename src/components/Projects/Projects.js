import React from 'react';

//components
import Sidebar from '../Layout/Sidebar';
import Header from '../Layout/Header';
import FormNewTask from '../Tasks/FormNewTask';
import ListNewTask from '../Tasks/ListNewTasks';

const Projects = () => {
    return ( 
        <div className="app-container">
            <Sidebar/>

            <div className="main-section">
                <Header />
                <main>
                    <FormNewTask

                    />
                    <div className="task-container">
                        <ListNewTask />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;