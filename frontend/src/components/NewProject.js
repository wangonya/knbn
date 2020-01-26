import React, { useState } from 'react';

import {
  Modal, Form, Icon, Input, Button,
} from 'antd';
import { Link } from 'react-router-dom';

import { submitAuthDetails } from '../utils';

const formStyle = {
  maxWidth: '300px',
  margin: '0 auto',
};

const formButtonStyle = {
  width: '100%',
};

const forgotPasswordLinkStyle = {
  float: 'left',
};

const registerLinkStyle = {
  float: 'right',
};


function NewProject({ form, visible }) {
  const { getFieldDecorator } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        submitAuthDetails(values, 'login');
      }
    });
  };

  return (
    <div>
      <Modal
        title="Add new project"
        visible={visible}
      >
        <Form style={formStyle} onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your Username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={formButtonStyle}>
            Log in
            </Button>
          </Form.Item>
          <Form.Item>
            <a style={forgotPasswordLinkStyle}>
            Forgot password
            </a>
            <Link to="/register" style={registerLinkStyle}>Register now!</Link>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Form.create()(NewProject);
