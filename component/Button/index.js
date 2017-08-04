import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
export default class RButton extends Button {
  static propTypes = {
    type: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'circle-outline']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    className: PropTypes.string,
    icon: PropTypes.string,
  };
  render() {
    let { children, className, type, htmlType, onClick, icon, shape, size, loading, ghost, disabled } = this.props;
    return (
      <Button
      onClick={onClick}
      htmlType={htmlType}
      className={className}
      type={type}
      icon={icon}
      shape={shape}
      ghost={ghost}
      size={size}
      disabled={disabled}
      loading={loading}
      >{children}</Button>
    );
  }
}
/***
static propTypes = {
  type: PropTypes.string,
  --------按钮类型：目前支持8种类型  Primary | info | success | error | warning | warning | normal | dashed | danger
  shape: PropTypes.oneOf(['circle', 'circle-outline']),
  --------设置按钮形状，可选值为 circle 或者不设
  size: PropTypes.oneOf(['large', 'default', 'small']),
  -------按钮有大、中、小三种尺寸。size 为 large small如不设置则为空
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  -------设置 button 原生的 type 值，可选值请参考
  onClick: PropTypes.func,
  -------click 事件的 handler
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  -------不可用状态
  icon: PropTypes.string,
  --------当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
  className: PropTypes.string,
  --------自定义的class名称
};
**/
