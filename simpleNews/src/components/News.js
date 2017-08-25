import React, {Component} from 'react';
import { Card } from 'antd';
import NewsCenter from './NewsCenter';

class News extends Component {

    render() {
      
        return (
            <div className="News">
                  <Card title="新闻中心" extra={<a href="">更多</a>} >
                    <NewsCenter />
                </Card>
            </div>
        );
    }
}

export default News;
