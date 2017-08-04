import React from 'react';
var CodeMirror = require('react-codemirror');
require('codemirror/mode/jsx/jsx');
require('codemirror/lib/codemirror.css');


export default class CodeMirrorCom extends React.Component {
  render() {
    let { code, style } = this.props;
    return (
      <div style={{border:'1px solid #eee',margin:10,padding:10,...style}}>
        <CodeMirror value={code}  onChange={(newCode)=>{
          this.setState({
            code: newCode
          });
        }}  options={{
          lineNumbers: true,
          mode: 'jsx',
          readOnly:true
        }} />
      </div>
    );
  }
}
