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
        <a className = "tab" href = "#home"><span className = "material-icons md-60">fitness_center</span></a>
      </div>
    )
  }
}
