import React from 'react';
class Layout extends React.Component {
  render(){
    let { children, className, style, padding } = this.props;
    let newClassName = className?`content-padding20 ${className}`:"content-padding20";
    return(<div  className={newClassName} style={{...style,paddingLeft:(padding || 20)+'px',paddingRight:(padding || 20)+'px',}}>{children}</div>)
  }
}
class Content  extends React.Component {
  render(){
    let { children, className, style, padding } = this.props;
    let newClassName = className?`content-card ${className}`:"content-card";
    return(<div className={newClassName} style={{...style,padding:(padding || 20)+'px',}}>{children}</div>)
  }
}
module.exports = {
  Layout,
  Content
}
