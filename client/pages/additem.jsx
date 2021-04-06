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
  }

  render(){
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
              <input type="file"></input>
            </div>
            <div className = "addItemQty">
              Qty
              <input type = "number"></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
