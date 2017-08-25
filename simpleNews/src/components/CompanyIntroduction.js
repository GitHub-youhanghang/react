import React, {Component} from 'react';
import { Card } from 'antd';
class CompanyIntroduction extends Component {

    render() {
      
        return (
            <div className="company-introduction">
                  <Card title="公司简介" extra={<a href="">更多</a>} >
                    <p>淘宝网是亚太地区较大的网络零售、商圈，由阿里巴巴集团在2003年5月创立。
淘宝网[1]  是中国深受欢迎的网购零售平台，拥有近5亿的注册用户数，每天有超过6000万的固定访客，同时每天的在线商品数已经超过了8亿件，平均每分钟售出4.8万件商品。[1] 
截止2011年年底，淘宝网单日交易额峰值达到43.8亿元，创造270.8万直接 且充分就业机会。
</p>

                </Card>
            </div>
        );
    }
}

export default CompanyIntroduction;
