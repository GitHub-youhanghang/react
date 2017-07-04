import React, {Component} from 'react';
import '../../css/header.css';

class Header extends Component {
  constructor(){
    super();
    this.state={
        miniHeader: false
    }

  }
  switchHeader(){
    this.setState({
      miniHeader:!this.state.miniHeader
    });
  }
  render() {
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        "padding-top": (this.state.miniHeader) ? "3px" : "15px",
        paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
      },
      //还可以定义其他的样式
    };

    return (
      <header style={styleComponentHeader.header} onClick={this.switchHeader.bind(this)}>
        <h1>这里是头部</h1>


      </header>
    );
  }
}

export default Header;
