import React from 'react';
import Home from './pages/home';
import NavBar from './pages/navbar'
import LandingPage from './pages/landingPage'
import parseRoute from './pages/parseroute';
import AddItem from './pages/additem';
import EditItem from './pages/edit';

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

    if(route.path === "home" || route.path === ""){
      return <Home/>
    }
    if(route.path === "add"){
      return <AddItem/>
    }
    if(route.path === "edit"){
      return <EditItem/>
    }

  }



  render() {
    const {route} = this.state
    if (route.path !== "") {
      return (
        <div className="container-lg">
          <NavBar userId={this.state.userId}></NavBar>
          {this.renderPage()}
        </div>
      )
    }
    if (route.path === ""){
      return (
        <div className = "container-lg">
          <NavBar userId = {this.state.userId}></NavBar>
          {this.renderPage()}
        </div>
      )
    }
  }
}
