import React, { Component } from "react"
import { RouteHandler } from "react-router"

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
