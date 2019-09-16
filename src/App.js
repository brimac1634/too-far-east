import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux'; 
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Header from './components/header/header.component';
import DropMenu from './components/drop-menu/drop-menu.component';
import HomePage from './pages/homepage/homepage.component';
import Loader from './components/loader/loader.component';
import Alert from './components/alert/alert.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { selectIsLoading, selectLoadingMessage } from './redux/loading/loading.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

const SignIn = lazy(() => import('./pages/sign-in/sign-in.component'))
const NewUpdate = lazy(() => import('./pages/new-update/new-update.component'))

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
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
        const { isLoading, loadingMessage } = this.props;

        return (
        	<div>
                <div>
                    <ErrorBoundary>
                        <Suspense fallback={<Loader />}>
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
                                    path='/admin' 
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
                                          <Redirect to={'/admin'}/>
                                        )
                                    )}
                                />
                                <Redirect to='/' />
                            </Switch>
                        </Suspense>
                    </ErrorBoundary>
                    {isLoading &&
                        <Loader message={loadingMessage} />
                    }
                </div>
                <Alert />
        	</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

