import React, { Component, PropTypes } from "react"

class Item extends Component {
  static propTypes = {
    events: PropTypes.object,
    params: PropTypes.object
  }

  render() {
    const id = parseInt(this.props.params.id, 10)
    const event = this.props.events.get(id)

    if (!event) { return null }

    return (
      <article>
        <h1>{event.name}</h1>
        <dl>
          <dt>members</dt>
          <dd>{event.member_count}</dd>
        </dl>
      </article>
    )
  }
}

export default Item
