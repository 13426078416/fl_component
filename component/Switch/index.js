import React from 'react';
import { Switch } from 'antd';
export default class RSwitch extends React.Component{
  render(){
    let { openText, closeText, type, className } = this.props;
    let props = {...this.props};
    delete props.openText;
    delete props.closeText;
    return(
        <Switch {...props} className={`${type?type:"blue"} ${className?className:''}`}  checkedChildren={openText} unCheckedChildren={closeText}  />
    )
  }
}
