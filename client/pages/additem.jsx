import e from "express";
import React from "react";

export default class AddItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      itemName:"",
      itemPrice:"",
      itemQty:"",
      itemImage:""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleQtyChange = this.handleQtyChange.bind(this)
  }

 /* handleNameChange(){
    this.setState({
      itemName:e.target.value
    })
  }
  handlePriceChange(){
    this.setState({
      itemPrice:e.target.value
    })
  }
  handleImageChange(){


  }
  handleQtyChange(){
    this.setState({
      itemQty : e.target.value
    })
  }
*/


  render(){
    console.log(this.state)
    return(
      <div className = "addItemContainer">
        <div className = "addItemHeading">
          Add New Item 123
          <form id = "addItemForm">
            <div className = "addItemName">
              Item Name123
              <input type = "string" ></input>
            </div>
            <div className = "addItemPrice">
              Price 123
              <input type = "number"></input>
            </div>
            <div className = "addItemImage">
              Image
              <input required type="file" value={this.state.itemImage} onChange={this.handleImageChange}></input>
            </div>
            <div className = "addItemQty">
              Qty
              <input  required type="number" value={this.state.itemQty} onChange={this.handleQtyChange}></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                               