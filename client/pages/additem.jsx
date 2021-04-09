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

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    console.log("submitting!")


  }




  render(){
    console.log(this.state)
    return(
      <div className = "container">
        <form id = "addItemForm">
          <div className = "addItemName">
            Item Name
            <input required className="form-control" type="text" placeholder="Item Name" aria-label="default input example"></input>
          </div>
          <div className = "addItemPrice">
            Price
            <input required min = "0" className="form-control" type="number" placeholder="Item Price" aria-label="default input example"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Item Image</label>
            <input required className="form-control" type="file" id="imageFile"></input>
          </div>
          <div className = "addItemQty">
            Qty
            <input required min="0" className="form-control" type="number" placeholder="QTY" aria-label="default input example"></input>
          </div>
            <button href="#home" onClick ={this.handleSubmit} type="button" className="btn btn-primary btn-lg"><a href="#home">Add</a></button>
        </form>
      </div>
    )
  }
}
