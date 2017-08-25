import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col xs={24} lg={{ span: 16 ,offset:4}}>
                    <a href="http://youhanghang.com">我的博客</a>
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;
