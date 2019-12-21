import React from 'react';
import ReactDOM from 'react-dom';


function ToonsList(props){
  const list = props.cartoons

  return <ul>{
        //Seperating any Array Values in Separate List using map() function
        list.map((list,index) => <li key={index}>{list}</li>)
  }
  </ul>
}


const cartoonsList = ['Pikachoo','Allaadin','Doremon','Tom']

ReactDOM.render(
  <ToonsList cartoons={cartoonsList}/>,
  document.getElementById('root')
);