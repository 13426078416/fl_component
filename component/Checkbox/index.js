import React from 'react';
import { Checkbox } from 'antd';
class RCheckbox extends Checkbox{
  onChange=(e)=>{
    let { onChange } = this.props;
    if(onChange) return onChange(e.target);
  }
  render(){
    return(
      <Checkbox  {...this.props} onChange={this.onChange}>{this.props.children}</Checkbox>
    )
  }
}
class Group extends Checkbox.Group{
  render(){
    return(
      <Checkbox.Group {...this.props} >
        {this.props.children}
      </Checkbox.Group>
    )
  }
}
class CheckAll extends React.Component{
  state = {
    options:[],
    value:[],
    checkAll:false,
  }
  componentDidMount(){
    let { options, value } = this.props;
    this.setState({
      options:options||[],
      value:value||[],
    })
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.options){
      this.setState({
        options:nextProps.options||[],
        value:nextProps.value||[],
      })
    }
  }
  checkAllChange=(e)=>{
    let value = [];
    let { onCheckAll } = this.props;
    let { options } = this.state;
    if(e.checked){
      options.map((child)=>value.push(child.value))
    }
    this.setState({
      value
    });
    if(onCheckAll) return onCheckAll(value)
  }
  onChange=(value)=>{
    let { onChange } = this.props;
    this.setState({
      value
    })
    if(onChange) return onChange(value);
  }
  render(){
    let { checkAllName } = this.props;
    let { options, value } = this.state;
    return(
      <div className="check-all">
        <RCheckbox  className="check-all-btn" checked={value.length === options.length} onChange={(e)=>this.checkAllChange(e)} indeterminate>{checkAllName||'全选'}</RCheckbox>
        <Group value={value}  className="check-all-group" options={options} onChange={this.onChange}>
        </Group>
      </div>
    )
  }
}

RCheckbox.Group = Group;
RCheckbox.CheckAll = CheckAll;
export default RCheckbox;
