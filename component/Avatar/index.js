import React from 'react';
import { Avatar } from 'antd';
export default class RAvatar extends Avatar {
  render() {
    return (
      this.props.src ?
      <Avatar {...this.props} /> :
      <Avatar {...this.props}  style={{ backgroundColor: '#87d068',...this.props.style }} icon="user">U</Avatar>
    );
  }
}
