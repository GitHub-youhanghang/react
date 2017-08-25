import React, {Component} from 'react';
import {Card } from 'antd';
class Contact extends Component {

    render() {
      
        return (
            <div className="product">
                    
           
                <Card title="产品展示" extra={<a href="">更多</a>} >
                                <div className="product-list">

                  <Card style={{ width: 280,height:370 }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                        <img alt="example" width="100%" src="http://img11.weikeimg.com/data/uploads/2015/02/06/69875414954d4a8f22d21b.jpg" />
                        </div>
                        <div className="custom-card">
                        <h3>Europe Street beat</h3>
                        <p>www.instagram.com</p>
                        </div>
                    </Card>
                  <Card style={{ width: 280,height:370 }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                        <img alt="example" width="100%" src="http://img11.weikeimg.com/data/uploads/2015/02/06/69875414954d4a8f22d21b.jpg" />
                        </div>
                        <div className="custom-card">
                        <h3>Europe Street beat</h3>
                        <p>www.instagram.com</p>
                        </div>
                    </Card>
                  <Card style={{ width: 280,height:370 }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                        <img alt="example" width="100%" src="http://img11.weikeimg.com/data/uploads/2015/02/06/69875414954d4a8f22d21b.jpg" />
                        </div>
                        <div className="custom-card">
                        <h3>Europe Street beat</h3>
                        <p>www.instagram.com</p>
                        </div>
                    </Card>
                  <Card style={{ width: 280,height:370 }} bodyStyle={{ padding: 0 }}>
                        <div className="custom-image">
                        <img alt="example" width="100%" src="http://img11.weikeimg.com/data/uploads/2015/02/06/69875414954d4a8f22d21b.jpg" />
                        </div>
                        <div className="custom-card">
                        <h3>Europe Street beat</h3>
                        <p>www.instagram.com</p>
                        </div>
                    </Card>
                         </div>
                </Card>                



            </div>
        );
    }
}

export default Contact;
