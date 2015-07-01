import Event from "./actions/Event"

class Actions {
  constructor({ dispatcher }) {
    this.events = new Event({ dispatcher })
  }
}

export default Actions
