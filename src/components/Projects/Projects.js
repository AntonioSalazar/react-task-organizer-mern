import React, { useContext, useEffect } from 'react';

//components
import Sidebar from '../Layout/Sidebar';
import Header from '../Layout/Header';
import FormNewTask from '../Tasks/FormNewTask';
import ListNewTask from '../Tasks/ListNewTasks';

//auth context
import AuthContext from '../../Context/Auth/authContext';

const Projects = () => {

    //get the auth info
    const authContext = useContext(AuthContext);
    const { authenticatedUser } =  authContext;

    useEffect(() => {
        authenticatedUser();
        //eslint-disable-next-line
    },[]) 

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