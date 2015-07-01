import Event from "./stores/Event"

class Stores {
  constructor({ dispatcher }) {
    this.events = new Event({ dispatcher })
  }
}

export default Stores
