import React, { Component } from "react"
import { Link, RouteHandler } from "react-router"

import List from "./List"

import storable from "../decorators/storable"
import "../styles/App.css"

@storable(["events"], (props) => {
  return {
    events: props.stores.events.list()
  }
})
class App extends Component {
  render() {
    return (
      <div className="app">
        <Link to="/">
          <h1>React.js Meetups</h1>
        </Link>

        <div className="master">
          <List {...this.props}/>
        </div>
        <div className="detail">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }
}

export default App
