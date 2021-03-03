import React , { Component} from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Homepage} />
          <Route path="/about"  component={About} />
          <Route path="/contact" component={Contact} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
