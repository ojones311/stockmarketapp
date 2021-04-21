import React from 'react'
import {AuthProvider} from './context/AuthContext'
import {Route, Switch} from 'react-router-dom'
import NavBar from '../src/Components/NavBar'
import LandingPage from '../src/Components/LandingPage'
import UserProfile from '../src/Components/UserProfile'
import UserList from '../src/Components/UserList'
import StockPage from '../src/Components/StockPage'
import AboutPage from '../src/Components/AboutPage'
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='App-body'>
      <AuthProvider>
        <Switch>
              <Route exact path= "/" component={LandingPage}/>
              <Route path='/users'  component={UserList}/>
              <Route path='/stocks/:symbol' component={StockPage}/>
              <Route path='/about'  component={AboutPage}/>
        </Switch>
      </AuthProvider>
      </div>
    </div>
  );
}

export default App;
