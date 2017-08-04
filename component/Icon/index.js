import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
export default class RIcon  extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };
  render(){
    let props = this.props;
    let isIconfont = /^iconfont-/.test(props.type);
    if(isIconfont){
      return <i className={`iconfont ${props.type} ${props.spin?'anticon-spin':''}  ${props.className}`} onClick={props.onClick} style={{...props.style, fontSize: `${props.size || 14}px`, color: props.color }}></i>
    }
    return(
      <Icon type={props.type} spin={props.spin} onClick={props.onClick} className={props.className} style={{...props.style, fontSize: `${props.size || 14}px`, color: props.color}} />
    )
  }
}
