import React from 'react';
import { Input } from 'antd';
export default class RInput extends Input {
  render(){
    let { onChange } = this.props;
    return(
      <Input {...this.props} onChange={e=>onChange?onChange(e.target.value):null} />
    )
  }
}
