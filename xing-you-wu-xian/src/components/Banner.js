import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';


class Banner extends Component {
    render() {
        return (
           
                <div className="banner">
                    <Row>
                        <Col xs={24} lg={{ span: 16, offset: 4 }}>
                            <Carousel autoplay>
                                <div className="banner-img"><img src="https://github-youhanghang.github.io/StaticPage/images/1.jpg" alt=""/></div>
                                <div className="banner-img"><img src="https://github-youhanghang.github.io/StaticPage/images/2.jpg" alt=""/></div>
                                <div className="banner-img"><img src="https://github-youhanghang.github.io/StaticPage/images/3.jpg" alt=""/></div>
                            </Carousel>
                        </Col>
                    </Row>
                </div>
          
        );
    }
}

export default Banner;
