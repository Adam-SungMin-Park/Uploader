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
      <div className = "container-sm">
        <div className = "addItemHeading">
          Add New Item
          <form id = "addItemForm">
            <div className = "addItemName">
              Item Name
              <input className="form-control" type="text" placeholder="Item Name" aria-label="default input example"></input>
            </div>
            <div className = "addItemPrice">
              Price
              <input className="form-control" type="number" placeholder="Item Price" aria-label="default input example"></input>
            </div>
           <div class="mb-3">
              <label for="formFile" class="form-label">Item Image</label>
              <input className="form-control" type="file" id="imageFile"></input>
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
