import React from "react";

export default class LandingPage extends React.Component {
  render(){
    return(
      <div className = "landingPageContainer">
        <h1>Welcome to Uploader please press button below to continue!</h1>
        <a href = "#home"><button>Demo Version</button></a>
      </div>
    )
  }
}
