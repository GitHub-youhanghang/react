import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import Detail from './js/Detail';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import { Router, Route, hashHistory } from 'react-router'

export default class Root extends React.Component{
  render(){

    return(
       <Router history={hashHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
        <Route path="/Detail" component={Detail}/>

      </Router>
    )


  }
}
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
