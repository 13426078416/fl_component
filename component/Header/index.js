import React from 'react';
import { Popover, Icon, Breadcrumb } from 'antd';
export default class Header extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  settingRender=()=>{
    let { setType } = this.props;
    return(
      <div className="nav-setting">
        <div className="nav-setting-tit">
          色调
        </div>
        <div className="nav-setting-cot">
          <div className="nav-setting-color" onClick={()=> setType('1')} style={{backgroundColor:'#69574d'}}></div>
          <div className="nav-setting-color" onClick={()=> setType('2')} style={{backgroundColor:'#162d4f'}}></div>
          <div className="nav-setting-color" onClick={()=> setType('3')} style={{backgroundColor:'#2c3e50'}}></div>
          <div className="nav-setting-color" onClick={()=> setType('4')} style={{backgroundColor:'#38578d'}}></div>
          <div className="nav-setting-color" onClick={()=> setType('5')} style={{backgroundColor:'#3e3e40'}}></div>
          <div className="nav-setting-color" onClick={()=> setType('6')} style={{backgroundColor:'#68893a'}}></div>
          <div className="nav-setting-color" onClick={()=> setType('7')} style={{backgroundColor:'#da8100'}}></div>
          <div className="nav-setting-color" onClick={()=> setType('8')} style={{backgroundColor:'#5194c1'}}></div>
        </div>
      </div>
    )
  }
  render() {
    let { routes } = this.props;
    let currentRoute = routes[routes.length-1];
    return (
      <div className="nav-bar">
          <div className="nav-cot">
            <h1 className="float-left">
              {currentRoute.title}
            </h1>
            <div className="nav-cot-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <Icon type="home" />
                <span>首页</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <span>{currentRoute.title}</span>
              </Breadcrumb.Item>
            </Breadcrumb>
            </div>
          </div>
          <div className="nav-right">
              <div className="nav-right-user float-left">
                <div  className="nav-right-user-img" style={{backgroundImage:`url(${require('../../images/default-user.jpg')})`}} ></div>
                <span className="nav-right-user-txt">Hi, Dave Mattew</span>
              </div>
              <Popover placement="leftTop"  content={this.settingRender()} trigger="click">
                <div className="nav-right-group float-left">
                  <Icon className="nav-right-icon" type="setting" />
                  <span className="nav-right-group-text">设置</span>
                </div>
              </Popover>
          </div>
      </div>
    );
  }
}
