import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';

export default class PCNewsContainer extends React.Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };

    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div class="leftContainer">
              <div class="carousel">
                <Carousel {...settings}>
                  <div><img src="./images/carousel_1.jpg"/></div>
                  <div><img src="./images/carousel_2.jpg"/></div>
                  <div><img src="./images/carousel_3.jpg"/></div>
                  <div><img src="./images/carousel_4.jpg"/></div>
                </Carousel>
              </div>
            </div>
            <Tabs class="tabs_news">
              <TabPane tab="头条新闻" key="1">
                <PCNewsBlock count={8} type="top" width="100%" bordered="false"/>
              </TabPane>

            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}