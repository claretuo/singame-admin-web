import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { RouterChildContext } from 'react-router';

const { Header, Sider, Content } = Layout;

interface IProps {
  route: RouteConfig;
  children: React.ReactNode
}

interface IState {
  collapsed: boolean
}

export default class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  /**
   * name
   */
  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  public render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {renderRoutes(this.props.route.routes) }
          </Content>
        </Layout>
      </Layout>
    );
  }
}