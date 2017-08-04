import React from 'react';
import PropTypes from 'prop-types';
// import { Input, Select, DatePicker, Checkbox, Radio, Icon } from './index';
import { Row, Col } from 'antd';
import RInput from '../Input';
import RDatePicker  from '../DatePicker';
import RSelect from '../Select';
import RCheckbox from '../Checkbox';
import RRadio from '../Radio';
import RIcon from '../Icon';
const { RangePicker } = RDatePicker;
const CheckboxGroup = RCheckbox.Group;
const RadioGroup = RRadio.Group;
const Option = RSelect.Option;
import Button from '../Button';

export default class SearchBar extends React.Component {
  static propTypes= {
    datas: PropTypes.array.isRequired,
    submit: PropTypes.func,
    reset: PropTypes.func,
  }
  state = {
    searchForm:{},
    vertical:false,
  }
  setFdefaultValue=(props,reset, cd)=>{
    var searchForm = {...this.state.searchForm};
    props.datas.map(child=>{
      if(child.type==='CheckboxGroup'){
        if(child.props && child.props.defaultValue && !reset){
          searchForm[child.key]=child.props.defaultValue;
        } else {
          let defaultValue = [];
          if(child.props && child.props.options && child.props.options.length && !reset){
            child.props.options.map((child)=> defaultValue.push(child.value))
          }
          searchForm[child.key]=defaultValue
        }
      } else if(child.type==='RadioGroup'){
        if(child.props && child.props.defaultValue && !reset){
          searchForm[child.key]=child.props.defaultValue;
        } else {
          searchForm[child.key]=child.props.options[0].value;
        }
      } else if(child.type==='RangePicker'){
        if(child.props && child.props.defaultValue && !reset){
          searchForm[child.key]=child.props.defaultValue;
        }
      } else if(child.type==='DatePicker'){
        if(child.props && child.props.defaultValue && !reset){
          searchForm[child.key]=child.props.defaultValue;
        }
      } else if(child.type==='Select'){
        if(child.props && child.props.defaultValue && !reset){
          searchForm[child.key]=child.props.defaultValue;
        } else {
          searchForm[child.key]='';
        }
      } else if(child.type==='Input'){
        if(child.props && child.props.defaultValue && !reset){
          searchForm[child.key]=child.props.defaultValue;
        } else {
          searchForm[child.key]='';
        }
      }
      return searchForm;
    })
    this.setState({searchForm},()=>{
      if(reset && cd){
        return cd()
      }
    })
  }
  componentDidMount(){
    if(this.props.datas){
      this.setFdefaultValue(this.props);
    }
    this.setState({
      vertical:this.props.vertical || false
    })
  }
  // componentWillReceiveProps(nextProps){
  //   if (nextProps.datas) {
  //     this.setFdefaultValue(nextProps);
  //   }
  // }
  range=(start, end)=>{
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  onCheckAllChange = (e, row) => {
    let checkedList = [];
    let { searchForm } = this.state;
    if(e.target.checked){
      row.props.options.map((child)=>{
        checkedList.push(child.value);
        return checkedList;
      })
    }
    searchForm[row.key] = checkedList;
    this.setState({
      searchForm
    });
  }
  typeRender=(row,key)=>{
    switch (row.type) {
      case 'Input':
        row.props = row.props?row.props:{}
        return (
          <RInput {...row.props}
          value={this.state.searchForm[row.key]}
          onChange={(e)=>{
            this.setState({
              searchForm:{
                ...this.state.searchForm,
                [row.key]:e.target.value
              }
            })
          }} />
        )
      case 'Select':
        row.props = row.props?row.props:{}
        return (
          <RSelect {...row.props} style={{ width: '100%' }}
          value={this.state.searchForm[row.key]}
          onChange={(value)=>{
            this.setState({
              searchForm:{
                ...this.state.searchForm,
                [row.key]:value
              }
            })
          }}>
            <Option value="">请选择{row.name}</Option>
            {
              row.props.options && row.props.options[0] &&
              row.props.options.map((option,optKey)=>
                <Option key={optKey} value={option.value}>{option.name}</Option>
              )
            }
          </RSelect>
        )
      case 'DatePicker':
        row.props = row.props?row.props:{}
        return (<RDatePicker
          format="YYYY-MM-DD HH:mm:ss"
          style={{width:'100%'}}
          value={this.state.searchForm[row.key]}
          min={row.props.min}
          max={row.props.max}
          disabledDates={row.props.disabledDates}
          onChange={(date, dateString)=>{
            this.setState({
              searchForm:{
                ...this.state.searchForm,
                [row.key]:dateString
              }
            })
          }}
        />)
      case 'RangePicker':
        row.props = row.props?row.props:{}
        return (<RangePicker
          style={{width:'100%'}}
          format="YYYY-MM-DD HH:mm:ss"
          value={this.state.searchForm[row.key]}
          min={row.props.min}
          max={row.props.max}
          disabledDates={row.props.disabledDates}
          onChange={(date, dateString)=>{
            console.log(dateString)
            this.setState({
              searchForm:{
                ...this.state.searchForm,
                [row.key]:dateString
              }
            })
          }}
        />)
      case 'RadioGroup':
        row.props = row.props?row.props:{}
        return (<RadioGroup {...row.props}
        value={this.state.searchForm[row.key]}
        onChange={(e)=>{
          this.setState({
            searchForm:{
              ...this.state.searchForm,
              [row.key]:e.target.value
            }
          })
        }}></RadioGroup>)
      case 'CheckboxGroup':
        row.props = row.props?row.props:{}
        return (<div className="search-checkgroup" >
          <RCheckbox
            onChange={(e)=>this.onCheckAllChange(e,row)}
            checked={this.state.searchForm[row.key] && this.state.searchForm[row.key].length === row.props.options.length}
          >
            全选
          </RCheckbox>
          <CheckboxGroup
          {...row.props}
          value={this.state.searchForm[row.key]}
          onChange={(value)=>{
            this.setState({
              searchForm:{
                ...this.state.searchForm,
                [row.key]:value
              }
            })
          }} />

        </div>)
      default:return null
    }
  }
  renderRow=(row,key)=>{
    return(
      <Col style={{display:(!this.state.showMore && key >2)?'none':''}} key={key} className="search-bar-col" span={row.longCol?12:8}>
        <div className="search-bar-label">{row.name}: </div>
        <div className="search-bar-content">
          {this.typeRender(row,key)}
        </div>
      </Col>
    )
  }
  render() {
    let { datas } = this.props;
    return (
      <div className={this.state.vertical?"search-bar vertical":"search-bar"}>
        <Row>
          {
            datas && datas.length &&
            datas.map((child,key)=>
              this.renderRow(child,key)
            )
          }
        </Row>
        <div className="search-bottom">
          <Button type="primary" onClick={this.submit}>搜索</Button>
          <Button onClick={this.reset} >清空</Button>
          {
            datas && datas.length && datas.length>3 &&
            <div className="search-more-btn" onClick={()=>this.setState({showMore:!this.state.showMore})}>{this.state.showMore?"收起":"高级搜索"}</div>
          }
          <Button className={this.state.vertical?"search-vh vertical":"search-vh"} onClick={()=>this.setState({vertical:!this.state.vertical})} shape="circle"><RIcon type="bars" /></Button>
        </div>
      </div>
    );
  }
  // 搜索
  submit=()=>{
    let { submit } = this.props;
    if(submit) return submit(this.state.searchForm)
  }
  // /.搜索
  // 清空
  reset=()=>{
    let { reset } = this.props;
    this.setState({
      searchForm:{},
    },()=>{
      this.setFdefaultValue(this.props,'reset',()=>{
        if(reset) return reset(this.state.searchForm)
      })
    })
  }
  // /清空
}

/**
example:

render(){
  let searchBarProps = {
    submit:(data)=>{
      console.log('submit result:', data);
    },
    reset:(data)=>{
      console.log('reset result:', data);
    },
    datas:[
      {
        key:'name',//单独的key
        name:'搜索名称',//名称
        type:'Input',//控件类型
        props:{
          defaultValue:'searchBar',
          placeholder:"请输入搜索名称",
        }
      },
      {
        key:'cate',
        name:'搜索分类',
        type:'Select',
        props:{
          placeholder:"请选择搜索分类",
          defaultValue:'NO2',
          options:[
            {
              name:'第一搜索分类',
              value:'NO1',
            },
            {
              name:'第二搜索分类',
              value:'NO2',
            },
            {
              name:'第三搜索分类',
              value:'NO3',
            },
          ]
        },
      },
      {
        key:'createTime',
        name:'创建时间',
        type:'DatePicker',
        props:{
          defaultValue:'2017/01/01',
          minData:'2017/07/02',//2017/07/02 || today
          maxData:'today',//2017/07/02
          format:"YYYY-MM-DD"
        }
      },
      {
        key:'cateCheckbox',
        name:'多选条件',
        type:'CheckboxGroup',
        longCol:true,
        props:{
          defaultValue:['span1','span3'],
          options: [
            { label: '标签1', value: 'span1' },
            { label: '标签2', value: 'span2' },
            { label: '标签3', value: 'span3' },
            { label: '标签4', value: 'span4' },
          ]
        }
      },
      {
        key:'cateRadio',
        name:'单选条件',
        type:'RadioGroup',
        longCol:true,
        props:{
          defaultValue:'case2',
          options: [
            { label: '条件1', value: 'case1' },
            { label: '条件2', value: 'case2' },
            { label: '条件3', value: 'case3' },
            { label: '条件4', value: 'case4' },
          ]
        }
      },
      {
        key:'timeRanger',
        name:'时间范围',
        type:'RangePicker',
        longCol:true,
        props:{
          defaultValue:['2017/01/01', '2017/01/20'],
          minData:'2017/07/02',//2017/07/02 || today
          maxData:'today',//2017/07/02
        }
      },
    ]
  }
  return(
    <Layout>
      <SearchBar {...searchBarProps} />
    </Layout>
  )
}
**/
