import React, {Component} from 'react';
import '../../../css/header.css';

class MainChild1 extends Component {
  render() {

    return (
      <div className="main-child-1">
        <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
        <p>{this.props.userid}</p>
        <p>{this.props.username}</p>
      </div>
    );
  }
}

export default MainChild1;
