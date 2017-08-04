import React from 'react';
import { Select } from 'antd';

export default class RSelect extends Select{
  rederRow=(row,index)=>{
    return(
      <Select.Option key={row.value}>{row.name}</Select.Option>
    )
  }
  render(){
    let { style, children } = this.props;
    return(
      <Select {...this.props} style={{minWidth:'200px',...style}}>
        {children}
      </Select>
    )
  }
}
