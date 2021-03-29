import React from 'react';
import Home from './pages/home';
import NavBar from './pages/navbar'
import LandingPage from './pages/landingPage'
import parseRoute from './pages/parseroute';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      route: parseRoute(window.location.hash),
      userId: "",
      email:"",
      password:''
    }
  }
  componentDidMount(){
    window.addEventListener('hashchange',(event)=>{
      this.setState({
        route:parseRoute(window.location.hash)
      })
    })
  }
  updateHash(hash){
    this.setState({
      route:hash
    })
    this.location.reload()
  }
  renderPage(){
    const { route } = this.state
    if(route.path === ""){
      return <LandingPage/>
    }
    if(route.path === "home"){
      return <Home/>
    }

  }



  render() {
    const {route} = this.state
    if (route.path !== "") {
      return (
        <div id="container">
          <NavBar userId={this.state.userId}></NavBar>
          {this.renderPage()}
        </div>
      )
    }
    if (route.path === ""){
      return (
        <div id = 'container'>
          <NavBar userId = {this.state.userId}></NavBar>
          {this.renderPage()}
        </div>
      )
    }
  }
}
