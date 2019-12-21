import React from 'react';
import ReactDOM from 'react-dom';


//Creating first Component
function Cartoon(anyvarname)
{
  return <h1>Hello  {anyvarname.name} on {anyvarname.show}</h1>
}

//Repeating Cartoon Composnent
function Show(){
  return <div>
    <Cartoon name='Pikachoo' show='Pokemon'/>
    <Cartoon name='Jasmin' show='Alladin'/>
  </div>
}

class MyComponent extends React.Component{
  render(){
    return <h1>Hello Mr {this.props.name}</h1>
  }
}


ReactDOM.render(
  <Show/>, //Component Defined using Function
  //<MyComponent name='Pankaj'/>, //Component Defined using Class
    document.getElementById('root')
  );
