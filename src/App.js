import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/Projects/Projects';

//context
import ProjectState from './Context/Projects/projectState';
import TaskState from './Context/Tasks/TaskState';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/sign-up' component={NewAccount}/>
            <Route exact path='/projects' component={Projects}/>
          </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  );
}

export default App;


