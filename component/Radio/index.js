import React from 'react';
import { Radio } from 'antd';
class RRadio extends Radio{
  render(){
    return(
      <Radio {...this.props}>{this.props.children}</Radio>
    )
  }
}
class Group extends Radio.Group{
  onChange=(e)=>{
    let { onChange } = this.props;
    if(onChange) onChange(e.target.value)
  }
  render(){
    return(
      <Radio.Group {...this.props} onChange={this.onChange}>
        {this.props.children}
      </Radio.Group>
    )
  }
}
class RButton extends Radio.Button{
  render(){
    let { colorType } = this.props;
    return(
      <Radio.Button className={colorType?colorType:'blue'} {...this.props}>
        {this.props.children}
      </Radio.Button>
    )
  }
}

RRadio.Group = Group;
RRadio.Button = RButton;
export default RRadio;
