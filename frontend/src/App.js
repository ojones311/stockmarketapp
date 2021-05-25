import React from 'react'
import {useLocation} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import {Route, Switch} from 'react-router-dom'
import NavBar from '../src/Components/NavBar'
import PrivateRoute from '../src/Components/PrivateRoute'
import AuthDashboard from '../src/Components/AuthDashboard'
import LandingPage from '../src/Components/LandingPage'
import UserProfile from '../src/Components/UserProfile'
import UserList from '../src/Components/UserList'
import StockPage from '../src/Components/StockPage'
import AboutPage from '../src/Components/AboutPage'
import Signin from '../src/Components/Signin'
import Signup from '../src/Components/Signup'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='App-body'>
      <AuthProvider>
        <Switch>
              <Route path='/accounts/signup' component={Signup} />
              <Route path='/accounts/signin' component={Signin} />
              <div>
                <NavBar />
                <PrivateRoute exact path= "/" component={AuthDashboard}/>
                <Route path = '/home' component={LandingPage} />
                <Route path='/profile/:id' component={UserProfile} />
                {/* <Route path='accounts/password/reset' component={ResetPassword} /> */}
                <Route path='/users'  component={UserList}/>
                <Route path='/stocks/:symbol' component={StockPage}/>
                <Route path='/about'  component={AboutPage}/>
              </div>
        </Switch>
      </AuthProvider>
      </div>
    </div>
  );
}

export default App;
