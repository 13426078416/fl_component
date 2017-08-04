import React from 'react';
import { Pagination } from 'antd';
export default class RPagination extends Pagination{
  render(){
    let props = this.props;
    return(
      <Pagination {...props}/>
    )
  }
}
