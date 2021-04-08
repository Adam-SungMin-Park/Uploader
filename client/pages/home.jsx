import React from 'react';
import axios from 'axios';
export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      itemPicture:[],
      itemName:[],
      itemPrice:[]
    }
  }
  /*componentDidMount(){
    fetch('/api/items').then(res=> res.json())
    .then(res => {
      for (var i = 0 ; i < res.length ; i++){

      }
    })

    })
  }
  */


  render(){
    if(this.state.itemName.length === 0 ){
      return (
        <>
      <div className = "homeContainer">
        <div className = "items">
          <h1>No data present</h1>
        </div>
        <a href = "#add"><button className = "addButton">Add Entry</button></a>
      </div>
        </>
      );
  }
  else{
    return(
      <>
      <div className = "homeContainer">

      </div>
      </>
    )
  }
}
}
