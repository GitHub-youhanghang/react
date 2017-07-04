import React, { Component } from 'react';
import '../../css/main.css';
import MainChild1 from './main/mainChild1'
class Main extends Component {
  constructor(){
    super();
    //state 作用域只属于当前类，不污染其他
    this.state={
      userName:"游来游去",
      age:26
    }

  }
  changeUserInfo(age){
    this.setState({age:age});
    this.refs.edit.style.color = 'red';
  }
  handleChildValueChange(event) {
    this.setState({age: event.target.value});
  };
  render() {

    
    return (
      <div className='main'>
        <h2>这里是main</h2>
        <p>{this.state.userName}</p>
        <p>{this.state.age}</p>
        <p>{this.props.userid}</p>
        <p>{this.props.username}</p>
        <button ref="edit" className="edit-btn" onClick={this.changeUserInfo.bind(this,33)}>修改</button>
        <hr/>
        <MainChild1 {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
        <hr/>
      </div >
    );
  }
}

export default Main;

Main.propTypes = {
	userid: React.PropTypes.number.isRequired
};
//定义默认的props的值
const defaultProps = {
	username: '这是一个默认的用户名'
};
// 初始化defaultProps的值
Main.defaultProps = defaultProps;
