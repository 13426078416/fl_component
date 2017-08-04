import React from 'react';
import { Menu, Tooltip } from 'antd';
const SubMenu = Menu.SubMenu;
import RIcon from '../Icon'
import history from '../../services/history';
export default class SideBar extends React.Component {

  state = {
    current: "",
    defaultOpenKeys:""
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    if(e.key === '/home'){
      history.push('')
      return;
    }
    history.push(e.key)
  }
  componentDidMount(){
    let { location } = this.props;
    this.setState({
        current: location.pathname
    });
  }
  render() {
    let { logo, datas, routes, sm, changeSm } = this.props;
    let parentPath = routes[routes.length-1].parentPath;//当前展开
    // console.log(history.getCurrentLocation().pathname,parentPath, this.state.current)
    return (
      <div className={`side-bar ${sm?'side-bar-sm':''}`}>
        <div className="logo">
          {
            !sm &&
            (logo ?
            <img src={logo} alt="" />
             :
            <h1>COMPONENT</h1>)
          }
          <RIcon className="side-size-icon" type={sm?'menu-unfold':'menu-fold'} color="#fff" size={20} onClick={changeSm}/>
        </div>
        <div className="side-bar-cot">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[history.getCurrentLocation().pathname]}
            defaultOpenKeys={[parentPath]}
            mode={sm?'vertical':'inline'}
            theme="dark"
          >
            {
              datas.map((child,key)=>
                child.children ?
                <SubMenu key={child.path} title={
                  sm?
                  <div className="side-bar-item-flex">
                    <RIcon type={child.Icon} size={20} />
                  </div>
                  :
                  <div className="side-bar-item-flex">
                    <RIcon type={child.Icon} size={18} />
                    <span>{child.name}</span>
                  </div>
                }>
                  {child.children.map((subChild,subKey)=>
                      <Menu.Item key={subChild.path}>{subChild.name}</Menu.Item>
                  )}
                </SubMenu>
                :
                <Menu.Item  key={child.path}>
                  {sm?
                    <Tooltip  placement="right" title={child.name}>
                      <div className="side-bar-item-flex">
                        <RIcon type={child.Icon} size={20} />
                      </div>
                    </Tooltip>
                    :
                    <div className="side-bar-item-flex">
                      <RIcon type={child.Icon} size={18} />
                      <span>{child.name}</span>
                    </div>
                  }
                </Menu.Item>

              )
            }

          </Menu>
        </div>
      </div>

    );
  }
}
/**
type sidebar的样式分类 1-4
bgColor string red blue yellow  默认黑色
logo logo路径
logo={require('../images/sidebar-1.jpg')}
datas  导航数据
**/
