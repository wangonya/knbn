import React from 'react';

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import { auth } from './utils';
import {
  Register,
  Login,
  Profile,
  Project,
  Home,
} from './components';
import './App.css';

const { SubMenu } = Menu;

const { Content, Sider } = Layout;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
);

const App = () => (
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
            title={(
              <span>
                <Icon type="user" />
                Profile
              </span>
              )}
          >
            <Menu.Item key="profile_link">
              <Link to="/profile">Edit profile</Link>
            </Menu.Item>
            <Menu.Item key="logout_button">Log out</Menu.Item>
          </SubMenu>
          <SubMenu
            key="projects_menu"
            title={(
              <span>
                <Icon type="laptop" />
                Projects
              </span>
              )}
          >
            <Menu.Item key="projectId">
              <Link to="/projects/project1">project 1</Link>
            </Menu.Item>
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
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/projects/:projectId" component={Project} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  </Layout>
);

export default App;
