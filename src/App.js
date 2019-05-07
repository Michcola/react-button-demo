import React from 'react';
import './App.css';
import Button from './components/button'


class App extends React.Component {
  render(){

  return (
    <div className="App">
    <Button value="按钮" onClick={this.z.bind(this)}></Button>
    <Button value="按钮"></Button>
    <Button value="按钮"></Button>
    </div>
  );
}
z(x){
  console.log('waimian')
  console.log(x)
}
}

export default App;
