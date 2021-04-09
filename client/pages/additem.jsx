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
<<<<<<< HEAD
  handleSubmit(){
    console.log("submitting!")
=======
  handleImageChange(){


>>>>>>> 24793432bfaaae32a30d52112e965875fa98ef6a
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
          Add New Item
          <form id = "addItemForm">
            <div className = "addItemName">
              Item Name
              <input required type = "string" value = {this.state.itemName} onChange = {this.handleNameChange} ></input>
            </div>
            <div className = "addItemPrice">
              Price
              <input required type="number" value={this.state.itemPrice} onChange={this.handlePriceChange}></input>
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
