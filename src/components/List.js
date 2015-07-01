import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

class List extends Component {
  static propTypes = {
    events: PropTypes.object
  }

  renderEvent(event) {
    return (
      <li key={event.number}>
        <Link
          to="event"
          params={{id: event.number}}
        >
          {event.name}
        </Link>
      </li>
    )
  }

  render() {
    return (
      <ul>
        {this.props.events.map(::this.renderEvent)}
      </ul>
    )
  }
}

export default List
