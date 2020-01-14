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


function Register(props) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        submitAuthDetails(values, 'register');
      }
    });
  };

  return (
    <div>
      <Modal
        title="Register"
        visible={setVisible}
        loading={setLoading}
        footer={null}
      >
        <Form style={formStyle} onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input a valid Email!',
                },
              ],
            })(
              <Input
                prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Username!',
                },
                {
                  min: 3,
                  message: 'Username has to be at least 3 characters long!',
                },
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters long!',
                },
              ],
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
            Register
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/login">Login</Link>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Form.create()(Register);
