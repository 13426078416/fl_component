import React from 'react';
import { Icon, Tooltip } from 'antd';
export default class IconButton extends React.Component {
  render() {
    let { type, icon, onClick, tooltip } = this.props;
    return(
      <Tooltip title={tooltip} placement="bottom">
        <div className="icon-button" type={type} onClick={onClick} >
          <Icon className="icon" type={icon} />
        </div>
      </Tooltip>
    )
  }
}
