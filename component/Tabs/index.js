import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class RTabs extends Tabs {
  renderRow=(child,key)=>{
    let {renderContent} = this.props;
    return(
      <TabPane tab={child.tab} key={child.key || key}>{child.renderContent?child.renderContent:(renderContent?renderContent():'')}</TabPane>
    )
  }
  onChange=(key)=>{
    let props = this.props;
    if(props.onChange) {
      return props.onChange(key)
    }
  }
  render(){
    let props = this.props;
    return(
      <Tabs className={props.colorType || 'primary'}  {...props}  onChange={(key)=>this.onChange(key)}>
        {
          props.datas.map((child,key)=>this.renderRow(child,key))
        }
      </Tabs>
    )
  }
}
