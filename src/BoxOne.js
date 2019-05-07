import React from 'react';
import './BoxOne.css'

class X extends React.Component {
render(){
  console.log(this.props)
  return (
    <div className="BoxOne">
        <div>{this.props.firstLine||'Box 1'}</div>
        <div>Box50</div>
    </div>
  );
}
}
export default X;
