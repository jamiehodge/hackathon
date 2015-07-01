import { EventEmitter } from "events"
import Immutable from "immutable"

const CHANGE_EVENT = "change"

class Store {
  constructor({ dispatcher }) {
    this.dispatcher = dispatcher

    this.emitter = new EventEmitter()
    this.emitter.setMaxListeners(0)

    this.dispatchToken = this.dispatcher.register(::this.handleDispatch)
    this.state = new Immutable.OrderedMap()
  }

  emitChange() {
    this.emitter.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.emitter.addListener(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.emitter.removeListener(CHANGE_EVENT, callback)
  }

  read(id) {
    return this.state.get(id)
  }

  list() {
    return this.state
  }
}

export default Store
