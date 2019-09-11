import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import DropMenu from './components/drop-menu/drop-menu.component';
import HomePage from './pages/homepage/homepage.component';
import NewUpdate from './pages/new-update/new-update.component';
import UpdatesPage from './pages/updates-page/updates-page.component';
import Loader from './components/loader/loader.component';

import './App.css';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isFetchingUser: selectIsUserFetching
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

class App extends Component {
    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession();
    }

    render() {
        const { isFetchingUser } = this.props;

        return (
        	<div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route 
                        path='/new-update'
                        render={()=>(
                            this.props.currentUser ? (
                              <NewUpdate />
                            ) : (
                              <Redirect to={'/'}/>
                            )
                        )}
                    />
                    <Route path='/updates' component={UpdatesPage} />
                    <Redirect to='/' />
                </Switch>
                <DropMenu />
                {isFetchingUser &&
                  <Loader />
                }
        	</div>
        )
    }
}

export default App;

