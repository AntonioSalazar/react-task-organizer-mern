import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/Projects/Projects';

//context
import ProjectState from './Context/Projects/projectState';
import TaskState from './Context/Tasks/TaskState';
import AlertState from './Context/Alerts/alertState';
import AuthState from './Context/Auth/authState';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/sign-up' component={NewAccount}/>
                <Route exact path='/projects' component={Projects}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;


