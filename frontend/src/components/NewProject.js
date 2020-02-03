import React, { useState } from 'react';

import {
  Modal, Form, Icon, Input, Button,
} from 'antd';

import { submitProjectDetails } from '../utils';

const { TextArea } = Input;

const formStyle = {
  maxWidth: '300px',
  margin: '0 auto',
};

const formButtonStyle = {
  width: '100%',
};

function NewProject({ form, visible, setVisible }) {
  const { getFieldDecorator } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        submitProjectDetails(values);
      }
    });
  };

  return (
    <div>
      <Modal
        title="Add new project"
        visible={visible}
        onCancel={() => setVisible(!visible)}
        footer={null}
      >
        <Form style={formStyle} onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Project title is required.' }],
            })(
              <Input
                prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Title"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('description', {
              rules: [{ required: false }],
            })(
              <TextArea
                prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                placeholder="Description"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={formButtonStyle}>
            Create project
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Form.create()(NewProject);
