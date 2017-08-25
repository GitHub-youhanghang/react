import React, {Component} from 'react';
import './css/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import CompanyIntroduction from './components/CompanyIntroduction';
import Contact from './components/Contact';
import News from './components/News';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Tab from './components/Tab';
import {Row, Col,BackTop } from 'antd';

class App extends Component {
  render(mountNode) {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Banner/>

        <div className="content">
          <Row>
            <Col lg={{span: 4}}>
            </Col>
            <Col lg={{span: 5}}>
             <News />
            </Col>
            <Col lg={{span: 6}}>
              <CompanyIntroduction />
            </Col>
            <Col lg={{span: 5}}>
              <Contact />
            </Col>
            <Col lg={{span: 4}}>
            </Col>
          </Row>

          <Row>
            <Col lg={{span: 4}}>
            </Col>
            <Col lg={{span: 16}}>
            <ProductList />
            </Col>
            <Col lg={{span: 4}}>
            </Col>
          </Row>          
          <Row>
            <Col lg={{span: 4}}>
            </Col>
            <Col lg={{span: 16}}>
                           <Tab />

            </Col>
            <Col lg={{span: 4}}>
            </Col>
          </Row>          
        </div>
        <Footer />
          
        <BackTop />
         
      </div>
    );
  }
}

export default App;
