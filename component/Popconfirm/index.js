import React from 'react';
import { Popconfirm } from 'antd';
export default class RPopconfirm extends React.Component{
  render(){
    let props = this.props;
    return(
      <Popconfirm {...props}/>
    )
  }
}
