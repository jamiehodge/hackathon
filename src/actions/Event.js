import Api from "../utils/Api"

import Action from "./Action"

import constants from "../constants"

class Event extends Action {
  constructor(props) {
    super(props)
    this.api = new Api("http://localhost:9292")
  }

  list(props) {
    this.dispatch({
      action: this.api.list(props),
      success: constants.EVENT_LISTED,
      failure: constants.EVENT_NOT_LISTED
    })
  }
}

export default Event
