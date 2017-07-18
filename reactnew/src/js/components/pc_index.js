import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCIndex extends React.Component {
    render() {
        return (
            <div className="pc_index">
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        );
    };
}