import React from 'react';
import history from '../../services/history';
class Link extends React.Component {
  state={}
  componentDidMount(){
  }
  render(){
    let { path, children, className, style } = this.props;
    return (
        <i className={`r-link ${className}`} style={style} onClick={()=>history.push(path)}>
          {children}
        </i>
    );
  }
}
Link.push = (path)=>{
  history.push(path);
}
export default Link;
