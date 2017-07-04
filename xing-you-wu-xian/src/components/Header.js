import React, { Component } from 'react';
import { Row, Col } from 'antd';
import logo from '../images/logo.jpg';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Row>
                    <Col xs={24} lg={{ span: 16 ,offset:4}}>
                        <div className="header-left">
                            <a className="logo" href="">
                                <img src={logo} alt="logo"/>
                            </a>
                        </div>
                        <div className="header-right">
                        </div>
                    </Col>
                </Row>
            </header>
        );
    }
}

export default Header;
