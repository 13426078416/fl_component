import React from 'react';
import RAvatar from '../Avatar';
export default class AvaterItem extends React.Component {
  render() {
    let { src, contentRender } = this.props;
    return(
      <div className="avater-item">
        <div className="avater-item-icon">
          <RAvatar size="large" src={src} />
        </div>
        <div className="avater-item-cot" >{contentRender}</div>
      </div>
    )
  }
}
