import React from "react"
import Router, { Route } from "react-router"

import App from "./components/App"
import Item from "./components/Item"
import Flux from "./Flux"

const flux = new Flux()

const routes = (
  <Route handler={App} path="/">
    <Route name="event" path="/:id" handler={Item}/>
  </Route>
)

const router = Router.create({
  routes,
  location: Router.HashLocation
})

flux.actions.events.list()

router.run((Handler) => {
  React.render(<Handler {...flux}/>, document.body)
})
