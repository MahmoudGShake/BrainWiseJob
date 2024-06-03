import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import CompanyManagement from './components/CompanyManagement';
import DepartmentManagement from './components/DepartmentManagement';
import EmployeeManagement from './components/EmployeeManagement';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/companies" component={CompanyManagement} />
                <Route path="/departments" component={DepartmentManagement} />
                <Route path="/employees" component={EmployeeManagement} />
            </Switch>
        </Router>
    );
};

export default App;
