import React from 'react';

export default class NavBar extends React.Component  {
  constructor (props) {
    super(props)
    this.state = {
      userId : this.props.userId
    }

  }
  render(){
    return(
      <div id = "navBarContainer">
        <a className = "tab" href = "#home"><span className = "material-icons md-60">home</span></a>
        <a className = "tab" href = "#cart"><span className = "material-icons md-60">shopping_cart</span></a>
        <a className = "tab" href = "#add"><span className = "material-icons md-60">post_add</span> </a>
        <a className = "tab" href = "#order"><span className = "material-icons md-60">list_alt</span></a>
      </div>
    )
  }
}
