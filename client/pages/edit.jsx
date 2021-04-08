import React from "react";

export default class EditItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      itemPrice: "",
      itemQty: "",
      itemImage: ""
    }
  }

  render() {
    return (
      <div className="container">
        <form id="editItemForm">
          <div className="addItemName">
            Item Name
            <input required className="form-control" type="text" placeholder="Item Name" aria-label="default input example"></input>
          </div>
          <div className="addItemPrice">
            Price
            <input required min="0" className="form-control" type="number" placeholder="Item Price" aria-label="default input example"></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Item Image</label>
            <input required className="form-control" type="file" id="imageFile"></input>
          </div>
          <div className="addItemQty">
            Qty
            <input required min="0" className="form-control" type="number" placeholder="QTY" aria-label="default input example"></input>
          </div>
          <button href="#home" type="button" className="btn btn-primary btn-lg">Edit</button>
          <button href="#home" type="button" className="btn btn-primary btn-lg">Delete</button>
        </form>
      </div>
    )
  }
}
