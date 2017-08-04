import React from 'react';
import { Upload } from 'antd';
import RIcon from '../Icon'
import Message from '../Message'
import RPopconfirm from '../Popconfirm'
import RButton from '../Button'
const Dragger = Upload.Dragger;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    callback(reader.result)
  });
  reader.readAsDataURL(img)
}
class RUpload extends Upload{
  state = {
    isLoading:false,
    percent:0,
    status:'',
    fileList:[],
    realFileList:[],
  }
  componentDidMount(){
    let { defaultValue } = this.props;
    if(defaultValue){
      this.setState({
        imageUrl:defaultValue
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.defaultValue){
      this.setState({
        imageUrl:nextProps.defaultValue
      })
    }
  }
  pushImg=(item, fileList, i, length)=>{
    fileList.push(item);
    i++;
    if(i<length){
      this.pushImg({imageUrl:'',i:i},fileList,i,length);
      return fileList;
    } else {
      return fileList;
    }
  }
  handleChange = (info, multiple, button) => {
    let { onChange } = this.props;
    this.setState({
      status:info.file.status,
      fileList:info.fileList
    })
    if(multiple){
      let realFileList = this.state.realFileList;
      info.fileList.map((child,i)=>{
        if (child.status === 'done') {
          let fileList = this.state.fileList;
          if(!button){
            fileList.splice(i,1);
          }
          this.setState({
            fileList
          })
          getBase64(child.originFileObj, imageUrl => {
            child.imageUrl = imageUrl;
            realFileList.push(child);
            this.setState({
              realFileList
            },()=>{
              if(button){
                info.fields = this.state.fileList;
                if(onChange) onChange(info, this.state.fileList);
              } else {
                info.fields = this.state.realFileList;
                if(onChange) onChange(info, this.state.realFileList);
              }
            })
          });
          return info;
        } else if (child.status === 'error'){
          Message.error(child.name + '上传失败!');
          let fileList = this.state.fileList;
          if(!button){
            fileList.splice(i,1);
          }
          this.setState({
            fileList
          })
          return info;
        }
        return info;
      })
    } else {
      let { onChange } = this.props;
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, imageUrl => {
          this.setState({ imageUrl });
          info.imageUrl = imageUrl;
          if(onChange) return onChange(info, imageUrl);
          return;
        });
        return
      } else if (info.file.status === 'error'){
        Message.error('上传失败');
        return;
      }
    }

  }
  changeOrder=(key,nextKey)=>{
    let realFileList = this.state.realFileList
    let item = realFileList.splice(key,1);
    realFileList.splice(nextKey,0,item[0]);
    this.setState({
      realFileList
    })
  }
  deleteItem=(key)=>{
    let realFileList = this.state.realFileList
    realFileList.splice(key,1);
    this.setState({
      realFileList
    })
  }
  render(){
    let { multiple, action, name, accept, type } = this.props;
    if(type && type==='button')return(
      <Dragger
        className="uploader-button"
        name={name || "avatar"}
        action={action}
        accept={accept}
        onChange={(info)=>this.handleChange(info,'multiple', 'button')}
        beforeUpload={()=>this.setState({fileList:[]})}
        fileList={this.state.fileList}
        multiple={multiple || false}
      >
        <RButton>
          <RIcon type="upload" /> 点击上传
        </RButton>
      </Dragger>
    )
    if(multiple){
      return(
        <div className="uploader-list">
          {
            this.state.realFileList.map((child,key)=>
              <div key={key} className="avatar-uploader">
                <div className="ant-upload-drag">
                  <div style={{backgroundImage:`url(${child.imageUrl})`}} alt="" className="avatar" > </div>
                  {
                    key > 0 &&
                    <RIcon type="left-circle" onClick={()=>this.changeOrder(key,key-1)} className="upload-left" color="#333" size="20" />
                  }
                  {
                    key < this.state.realFileList.length-1 &&
                    <RIcon type="right-circle" onClick={()=>this.changeOrder(key,key+1)} className="upload-right" color="#333" size="20" />
                  }
                  <RPopconfirm title="删除后不可恢复是，否继续？" onConfirm={()=>this.deleteItem(key)}>
                    <RIcon type="delete"  className="upload-delete" color="#fff" size="13" />
                  </RPopconfirm>
                </div>
              </div>
            )
          }
          <Dragger
            className="avatar-uploader"
            name={name || "avatar"}
            fileList={this.state.fileList}
            showUploadList={false}
            multiple
            accept={accept}
            beforeUpload={()=>this.setState({fileList:[]})}
            action={action}
            onChange={(info)=>this.handleChange(info,'multiple')}
          >
            {
              this.state.imageUrl ?
                <div style={{backgroundImage:`url(${this.state.imageUrl})`}} alt="" className="avatar" > </div>:
                <RIcon type="upload" color="#ccc" size="35" />
            }
            {
              this.state.status === 'uploading' &&
              <div className="upload-loading">
                <RIcon type="loading" size="25" color="#108ee9" />
              </div>
            }
          </Dragger>

        </div>
      )
    }
    return(
      <Dragger
        className="avatar-uploader"
        name={name || "avatar"}
        showUploadList={false}
        action={action}
        accept={accept}
        onChange={this.handleChange}
      >
        {
          this.state.imageUrl ?
            <div style={{backgroundImage:`url(${this.state.imageUrl})`}} alt="" className="avatar" > </div>:
            <RIcon type="upload" color="#ccc" size="35" />
        }
        {
          this.state.status === 'uploading' &&
          <div className="upload-loading">
            <RIcon type="loading" size="25" color="#108ee9" />
          </div>
        }
      </Dragger>
    )
  }
}
// beforeUpload={beforeUpload}
// onChange={this.handleChange}
export default RUpload;
