import React from 'react';
import { Slider } from 'antd';
class RSlider extends Slider{
  render(){
    return(
      <Slider {...this.props} />
    )
  }
}

export default RSlider;
