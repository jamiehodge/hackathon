import Store from "./Store"
import Immutable from "immutable"

import constants from "../constants"

const Record = Immutable.Record({
  lat: null,
  lon: null,
  member_count: null,
  name: null,
  number: null
})

class Event extends Store {
  handleDispatch({ data, type }) {
    switch(type) {
      case constants.EVENT_LISTED:
        const events = data.map((event) => [event.number, new Record(event)])
        this.state = this.state.merge(events)
        this.emitChange()
        break
    }
  }
}

export default Event
