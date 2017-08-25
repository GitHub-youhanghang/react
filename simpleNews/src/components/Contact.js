import React, {Component} from 'react';
import { Card,Icon } from 'antd';
class Contact extends Component {

    render() {
      
        return (
            <div className="contact">
                  <Card title="联系我们" extra={<a href="">更多</a>} >
                    <ul className="contact-ul">
                        <li><Icon type="global" />官网: <a href="https://www.baidu.com">https://www.baidu.com</a></li>
                        <li><Icon type="phone" />电话: <span>123456789</span></li>
                        <li><Icon type="mail" />电话: <span>123456789@qq.com</span></li>
                        <li><Icon type="environment" />地址: <span>北京市昌平区生命科学园</span></li>
                    </ul>
                </Card>
            </div>
        );
    }
}

export default Contact;
