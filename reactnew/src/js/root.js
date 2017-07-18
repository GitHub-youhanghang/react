import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import { Button } from 'antd';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileIndex from './components/mobile_index';
import MobileNewDetails from './components/mobile_news_details';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
// import registerServiceWorker from './registerServiceWorker';

export default class Root extends React.Component {
    render() {
        return (
            //这里替换了之前的index，变成了程序的入口
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/datails/:uniquekey" component={PCNewsDetails}></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={MobileIndex}></Route>
                        <Route path="/datails/:uniquekey" component={MobileNewDetails}></Route>
                    </Router>
                </MediaQuery>
            </div>
        );
    };

}

// 程序入口文件
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
// registerServiceWorker();
