import React from 'react';
import Table from '../Table';
import Hs from '../Hs';
import { Content } from '../Layout';
let columns = [
  {
    title: '参数',
    dataIndex: 'params',
    width:'15%'
  },
  {
    title: '必须',
    dataIndex: 'request',
    width:'8%'
  },
  {
    title: '说明',
    dataIndex: 'scp',
  },
  {
    title: '类型',
    dataIndex: 'type',
    width:'15%'
  },
  {
    title: '默认值',
    dataIndex: 'def',
    width:'15%'
  }
]

export default class MarkTable extends React.Component {
  render(){
    let {dataSource, describe, title} = this.props;
    return(
      <Content>
        <Hs>{title || "API"}</Hs>
        {
          describe?<div style={{paddingTop:10}}>{describe}</div>:null
        }
        <div className="markdown">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
           />
        </div>
      </Content>
    )
  }
}
