import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
let setProps = (min , max, disabledDates, valueProps, isMonth)=>{
  let disabledFommat = isMonth && isMonth==='isMonth'?'YYYY-MM':'YYYY-MM-DD';
  if(min && max){
    if(disabledDates){
      valueProps.disabledDate = (current)=> {
        let disableIndex = disabledDates.findIndex((item)=>current && current.format(disabledFommat) === moment(item).format(disabledFommat));
        return (current && current.valueOf() < moment(min).valueOf()) || (current && current.valueOf() > moment(max).valueOf()) || (current && current.format(disabledFommat) && disableIndex>=0);
      }
    } else {
      valueProps.disabledDate = (current)=> (current && current.valueOf() < moment(min).valueOf()) || (current && current.valueOf() > moment(max).valueOf());
    }
  } else if(min) {
    if(disabledDates){
      valueProps.disabledDate = (current)=> {
        let disableIndex = disabledDates.findIndex((item)=>current && current.format(disabledFommat) === moment(item).format(disabledFommat));
        return (current && current.valueOf() < moment(min).valueOf()) || (current && current.format(disabledFommat) && disableIndex>=0);
      }
    } else {
      valueProps.disabledDate = (current)=> (current && current.valueOf() < moment(min).valueOf());
    }
  } else if(max) {
    if(disabledDates){
      valueProps.disabledDate = (current)=> {
        let disableIndex = disabledDates.findIndex((item)=>current && current.format(disabledFommat) === moment(item).format(disabledFommat));
        return (current && current.valueOf() > moment(max).valueOf()) || (current && current.format(disabledFommat) && disableIndex>=0);
      }
    } else {
      valueProps.disabledDate = (current)=> (current && current.valueOf() > moment(max).valueOf());
    }
  } else if(disabledDates){
    valueProps.disabledDate = (current)=> {
      let disableIndex = disabledDates.findIndex((item)=>current && current.format(disabledFommat) === moment(item).format(disabledFommat));
      return (current && current.format(disabledFommat) && disableIndex>=0);
    }
  }
}
class RDatePicker extends DatePicker{
  render(){
    let { defaultValue, value, min, max, disabledDates, disabledTime } = this.props;
    let valueProps = {};
    if(value){
      valueProps.value = moment(value);
    }else if(defaultValue){
      valueProps.defaultValue = moment(defaultValue);
    }
    setProps(min , max, disabledDates, valueProps)
    if(disabledTime){
      let returnDisableTime = {};
      if(disabledTime.disabledHours){
        returnDisableTime.disabledHours = ()=>disabledTime.disabledHours;
      }
      if(disabledTime.disabledMinutes){
        returnDisableTime.disabledMinutes = ()=>disabledTime.disabledMinutes;
      }
      if(disabledTime.disabledSeconds){
        returnDisableTime.disabledSeconds = ()=>disabledTime.disabledSeconds;
      }
      console.log(returnDisableTime)
      valueProps.disabledTime=()=> {
        return returnDisableTime
      }
    }
    return(
      <DatePicker
        {...this.props}
        {...valueProps}
       />
    )
  }
}
class MonthPicker extends React.Component{
  render(){
    let { defaultValue, value, min, max, disabledDates } = this.props;
    let valueProps = {};
    if(value){
      valueProps.value = moment(value);
    }else if(defaultValue){
      valueProps.defaultValue = moment(defaultValue);
    }
    setProps(min , max, disabledDates, valueProps, 'isMonth');
    return(
      <DatePicker.MonthPicker
        {...this.props}
        {...valueProps}
      />
    )
  }
}
class RangePicker extends React.Component{
  render(){
    let { defaultValue, value, min, max, disabledDates  } = this.props;
    let defaultValueArr = [];
    let valueArr = [];
    if(defaultValue && defaultValue[0] && defaultValue[1]){
      defaultValueArr=[moment(defaultValue[0]),moment(defaultValue[1]),]
    }
    if(value && value[0] && value[1]){
      valueArr=[moment(value[0]),moment(value[1]),]
    }
    let valueProps = {};
    if(value){
      valueProps.value = valueArr;
    }else if(defaultValue){
      valueProps.defaultValue = defaultValueArr;
    }
    setProps(min , max, disabledDates, valueProps)
    return(
      <DatePicker.RangePicker
        {...this.props}
        {...valueProps}
      />
    )
  }
}
RDatePicker.MonthPicker = MonthPicker;
RDatePicker.RangePicker = RangePicker;
export default RDatePicker;
