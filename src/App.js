import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import DropMenu from './components/drop-menu/drop-menu.component';
import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in/sign-in.component';
import NewUpdate from './pages/new-update/new-update.component';
import UpdatesPage from './pages/updates-page/updates-page.component';
import Loader from './components/loader/loader.component';
import Alert from './components/alert/alert.component';

import { selectCurrentUser, selectIsUserFetching } from './redux/user/user.selectors';
import { selectIsLoading, selectLoadingMessage } from './redux/loading/loading.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isFetchingUser: selectIsUserFetching,
  isLoading: selectIsLoading,
  loadingMessage: selectLoadingMessage
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
        const { isFetchingUser, isLoading, loadingMessage } = this.props;

        return (
        	<div>
                {
                    !isFetchingUser &&
                    <div>
                        <Switch>
                            <Route 
                                exact 
                                path='/'
                                render={() =>
                                    <div>
                                        <Header />
                                        <HomePage />
                                        <DropMenu />
                                    </div>
                                }  
                            />
                            <Route 
                                exact 
                                path='/sign-in' 
                                render={() =>
                                    this.props.currentUser ? (
                                      <Redirect to={'/'}/>
                                    ) : (
                                      <SignIn />
                                    )
                                }
                            />
                            <Route 
                                exact
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
                        {isLoading &&
                            <Loader message={loadingMessage} />
                        }
                    </div>
                }
                {isFetchingUser &&
                  <Loader />
                }
                <Alert />
        	</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

