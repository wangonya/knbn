import React from 'react'

import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom"

import './App.css'

const { SubMenu } = Menu

const { Content, Sider } = Layout

class App extends React.Component {

  render() {
    return (
      <Layout>
        <Router>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultOpenKeys={['projects_menu']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="profile_menu"
              title={
                <span>
                <Icon type="user" />
                Profile
              </span>
              }
            >
              <Menu.Item key="profile_link">
                <Link to="/profile">Edit profile</Link>
              </Menu.Item>
              <Menu.Item key="logout_button">Log out</Menu.Item>
            </SubMenu>
            <SubMenu
              key="projects_menu"
              title={
                <span>
                <Icon type="laptop" />
                Projects
              </span>
              }
            >
              <Menu.Item key="projectId">
        <Link to="/projects/project1">project 1</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
            <Route path="/profile">
             add profile component here
            </Route>
            <Route path="/projects/:projectId">
             add project component here
            </Route>
            <Route path="/">
             add home component here
            </Route>
          </Switch>
          </Content>
        </Layout>
        </Router>
      </Layout>
    );
  }
}

export default App;
