import React, {Component} from 'react';
import logo from '../media/logo.svg';
import Header from './compments/Header';
import Main from './compments/Main';
import Footer from './compments/Footer';
import '../css/App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        {/*header*/}
        <Header/>
        <hr/>
        <Main userid={123} username={'nick'}/>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default App;
