import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import MediaQuery from 'react-responsive';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Homepage from './pages/homepage/homepage.component';

import './App.css';


class App extends Component {

  render() {
    return (
    	<div>
    		<Header />
    		<Switch>
    			<Route exact path='/' component={Homepage} />
                <Route path='/shop' component={Homepage} />
                <Route path='/gallery' component={Homepage} />
                <Route path='/contact' component={Homepage} />
                <Redirect to='/' />
    		</Switch>
    		<Footer />
    	</div>
    )
  }
}

export default App;

