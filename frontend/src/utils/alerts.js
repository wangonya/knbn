import { message } from 'antd';

message.config({
  maxCount: 1,
});

const loadingAlert = (text) => {
  message.loading(text);
};

const errorAlert = (text) => {
  message.error(text);
};

const successAlert = (text) => {
  message.success(text);
};

export { errorAlert, successAlert, loadingAlert };
