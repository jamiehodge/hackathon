import Actions from "./Actions"
import Dispatcher from "./Dispatcher"
import Stores from "./Stores"

class Flux {
  constructor() {
    this.dispatcher = new Dispatcher()
    this.actions = new Actions(this)
    this.stores = new Stores(this)
  }
}

export default Flux
