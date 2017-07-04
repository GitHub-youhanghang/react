import React, {Component} from 'react';
import logo from '../media/logo.svg';
import Header from './compments/Header';
import DetailMain from './compments/DetailMain';
import Footer from './compments/Footer';
import '../css/Detail.css';

class Detail extends Component {

  render() {

    return (
      <div className="Detail">
        {/*header*/}
        <Header/>
        <hr/>
        <DetailMain userid={123} username={'nick'}/>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default Detail;
