import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import MediaQuery from 'react-responsive';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import UpdatesPage from './pages/updates-page/updates-page.component';

import './App.css';


class App extends Component {
    state = {
        section: 'Home'
    }

    handleSection = (section) => this.setState({ section })

    render() {
        const { section } = this.state;
        return (
        	<div>
                <Header />
                <Switch>
                    <Route exact path='/' render={()=> (
                            <HomePage section={section}/>
                        )} 
                    />
                    <Route path='/updates' component={UpdatesPage} />
                    <Redirect to='/' />
                </Switch>
        		<Footer handleSection={this.handleSection} />
        	</div>
        )
    }
}

export default App;

