import React from 'react';
export default class Hs extends React.Component {
  render() {
    let { children , type, className, style, onClick } = this.props;
    switch (type) {
      case 'large':
        return(
          <h2 onClick={onClick} className={"hs "+className} style={style}>{children}</h2>
        )
      case 'small':
        return(
          <h5 onClick={onClick} className={"hs "+className} style={style}>{children}</h5>
        )
      default:return(
        <h3 onClick={onClick} className={"hs "+className} style={style}>{children}</h3>
      )

    }
  }
}
