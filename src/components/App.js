import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import About from './About';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default

import UserListContainer from './user/UserListContainer';
import AddOrEditUserContainer from './user/EditUserContainer';

const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>
                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/users" component={UserListContainer} />
                        <Route exact path="/user" component={AddOrEditUserContainer} />
                        <Route path="/user/:id" component={AddOrEditUserContainer} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;



