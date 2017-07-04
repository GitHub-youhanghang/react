import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import banner1 from '../images/1.jpg';
import banner2 from '../images/2.jpg';
import banner3 from '../images/3.jpg';

class Banner extends Component {
    render() {
        return (
           
                <div className="banner">
                    <Row>
                        <Col xs={24} lg={{ span: 16, offset: 4 }}>
                            <Carousel autoplay>
                                <div className="banner-img"><img src={banner1} alt=""/></div>
                                <div className="banner-img"><img src={banner2} alt=""/></div>
                                <div className="banner-img"><img src={banner3} alt=""/></div>

                            </Carousel>
                        </Col>
                    </Row>
                </div>
          
        );
    }
}

export default Banner;
