import React, { Component } from 'react';
import {Tabs,Card } from 'antd';
const TabPane = Tabs.TabPane;
class Tab extends Component {
    render() {
     

        return (
            <div className="tab">
                <Card title="Tabs切换" extra={<a href="">更多</a>} >
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
                            <TabPane tab="Tab 2" key="2">Tab 2</TabPane>
                            <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
                        </Tabs>
                </Card>

    
            </div>
        );
    }
}

export default Tab;
