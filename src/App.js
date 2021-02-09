import React from 'react';


class App extends React.Component{

  constructor(props){

    super(props);
    console.log("hello ")
  }

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('updated');
  }

  componentWillUnmount(){
    console.log("goodBye world");
  }

  state = {
    count: 0,
  };

  add = () => {
    //console.log('add');
    //this.setState({count: this.state.count + 1}); 
    //setState()함수의 인자로 함수를 전달하면 성능 문제 없이 업데이트 가능

    this.setState(current => ({
      count: current.count + 1
    }))

  }

  minus = () => {
    //this.setState({count: this.state.count - 1});
    this.setState(current => ({
      count: current.count - 1
    }))
  }

  render(){
    console.log("render.....");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
    </div>
      );
  }
}

export default App;
