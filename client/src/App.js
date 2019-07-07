import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Points from './components/Points';
import Signup from './components/Signup';
import Ads from './components/Ads';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/points' component={Points}/>
        <Route exact path='/signup' component={Signup} />
      </Switch>
      <Ads />
      <Footer />
    </div>  
  );
}

export default App;
