import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import MediaQuery from 'react-responsive';

import Header from './components/header/header.component';
import DropMenu from './components/drop-menu/drop-menu.component';
import HomePage from './pages/homepage/homepage.component';
import UpdatesPage from './pages/updates-page/updates-page.component';

import './App.css';


class App extends Component {

    render() {
        return (
        	<div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/updates' component={UpdatesPage} />
                    <Redirect to='/' />
                </Switch>
                <DropMenu />
        	</div>
        )
    }
}

export default App;

