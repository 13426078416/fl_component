import { message } from 'antd';
export default {
  success:(title) => {
    message.success(title);
  },

  error:(title) => {
    message.error(title);
  },

  warning:(title) => {
    message.warning(title);
  },
}
