import React, { Component } from 'react';
import { Row, Col,Menu, Icon  } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <nav className="nav">

                <Row>
                    <Col xs={24} lg={{ span: 16, offset: 4 }}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="home">
                                <a href=""><Icon type="home" />首页</a>
                            </Menu.Item>
                           
                            <SubMenu title={<span><Icon type="setting" />三级菜单</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>

                            <SubMenu title={<span><Icon type="setting" />两级菜单</span>}>
                             
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                               
                               
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                               
                            </SubMenu>
                            
                            <Menu.Item key="news" >
                                <a href=""><Icon type="star" />新闻动态</a>
                            </Menu.Item>
                            <Menu.Item key="contact" >
                                <a href=""><Icon type="star" />联系我们</a>
                            </Menu.Item>
                        </Menu>
                    </Col>

                </Row>


            </nav>
        );
    }
}

export default Nav;
