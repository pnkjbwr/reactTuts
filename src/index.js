import React from 'react';
import ReactDOM from 'react-dom';

function Message(props){
  if (props.value) {
    //Value = True
    return <h1>This is 1st Msg</h1>
  }
  //Value = False
  return <h1>This is 2nd Msg</h1>

}

class Btn extends React.Component{

  constructor(props){
    super(props);
    this.state = {value:true,clickedCount:1}
  }
  

  Clicked = () => {
    this.setState({
      value : !this.state.value, //Switching values True or False
      clickedCount : this.state.clickedCount+1 //increasing Values of Clicked Count
    })
  } 

  render(){
    return (
      <div>
          <h3>Total Clicked : {this.state.clickedCount}</h3>
          <button onClick={this.Clicked}>Change Message</button>
          <Message value={this.state.value} />
      </div>
    );
  }
}


ReactDOM.render(
<Btn />,
document.getElementById('root')
);