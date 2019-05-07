import React from 'react';
import './button.css'

export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active:false,
            deltaX:0,
            deltaY:0,
        }
        this.myRef = React.createRef()
    }
    render(){
    return (
    <button ref={this.myRef} className="button2" onClick={this.x.bind(this)}>
    <span className="value">{this.props.value}</span>
     {this.state.active === true ? (
     <span 
     className="circle" 
     onAnimationEnd={this.y.bind(this)}
     style={{left:this.state.deltaX,top:this.state.deltaY,}}
      />
      ) :(
     ''
     )}
    </button>
  );
}
x(event){
     let {x,y} =this.myRef.current.getBoundingClientRect()
     let {clientX,clientY} = event
     let deltaX = clientX - x -5
     let deltaY = clientY - y -5
    this.setState({
        active: true,
        deltaX: deltaX,
        deltaY: deltaY,
    })
    console.log('limian')
    this.props.onClick && this.props.onClick.call(null,'fuck')
}
y(){
    this.setState({
        active:false,
    })
}
}
