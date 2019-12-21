import React from 'react';
import ReactDOM from 'react-dom';

//States and Changing Values at Runtime
//Props = Values From Out of Components
//State = Values From inside of Components

class Inc extends React.Component{
  constructor(props){
    super(props);
    this.state = {counter : 0}
  }

  increment = (e) => {
    e.preventDefault();
    this.setState({
      counter : this.state.counter + 1
    });
  }

  render(){
    return <a href="https://google.com" onClick={this.increment}>Valie is  = {this.state.counter}</a>
  }
}

ReactDOM.render(
  <Inc />,
  document.getElementById('root')
)