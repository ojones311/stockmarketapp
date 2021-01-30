import React from 'react'
import NavBar from '../src/Components/NavBar'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <h1>Stock Market App </h1>
      <div className='App-body'>
      <Switch>
            <Route exact path= "/" component={StockChart}/>
            <Route path="/profile/:id" component={UserProfile}/>
            <Route path='/users'  component={UserList}/>
            <Route path='/stocks/:symbol' component={StockPage}/>
            <Route path='/about'  component={AboutPage}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
