import React from "react"
import Router, { DefaultRoute, Route } from "react-router"

import App from "./components/App"
import Index from "./components/Index"
import Item from "./components/Item"
import Flux from "./Flux"

const flux = new Flux()

const routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Index}/>
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
