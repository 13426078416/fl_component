import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
const FormItem = Form.Item;

class RFormCompent extends React.Component{
  state={
    loading:false,
  }
  componentWillMount() {
    clearTimeout(this.timer);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  handleSubmit = (e) => {
   e.preventDefault();
   let { onSubmit } = this.props;
   this.props.form.validateFieldsAndScroll((err, values) => {
     console.log('Form 返回值: ', values);
     if (!err) {
       this.setState({
         loading:true
       })
       this.timer = setTimeout(()=>{
         this.setState({
           loading:false
         })
       }, 500);
       return onSubmit(values);
     }
     console.log('Form Err',err)
     return onSubmit(values, err);
   });
 }
 renderRow=(row,index)=>{
   const { getFieldDecorator } = this.props.form;
   let setControl = row.setControl || {};
   const formItemLayout = row.label?{
     labelCol: { span: 6 },
     wrapperCol: { span: 10 },
   }:{};
   return(
     row.hide ? null :
     <FormItem
        key={row.key}
       {...formItemLayout}
       label={row.label}
       hasFeedback
       help={row.help}
       required={row.required || false}
     >
       {getFieldDecorator(row.key, {
         initialValue:setControl.initialValue,
         valuePropName:setControl.valuePropName || 'value',
         rules: setControl.rules,
       })(
         row.render()
       )}
     </FormItem>
   )
 }
 render() {
   let { layout, hideRequiredMark, datas, submitText } = this.props;
   return (
     <Form layout={layout} hideRequiredMark={hideRequiredMark || false} onSubmit={this.handleSubmit}>
      {datas.map((child, key)=>this.renderRow(child, key))}
      <FormItem
        wrapperCol={datas[0] && datas[0].label?{ span: 12, offset: 6 }:{}}
      >
        <Button type="primary" loading={this.state.loading} htmlType="submit">{submitText||'提交'}</Button>
      </FormItem>
     </Form>
   );
 }
}
const RForm = Form.create({
  // onFieldsChange:(props, fields)=>{console.log('onFieldsChange:', props, fields)},
  // mapPropsToFields:(props)=>{console.log('mapPropsToFields:', props)},
  // onValuesChange:(props, values)=>{console.log('onValuesChange:', props, values)},
})(RFormCompent);
export default RForm
