import flux from "flux"

class Dispatcher extends flux.Dispatcher {
  dispatch(action) {
    if (action.error) {
      console.error(action)
    } else {
      console.log(action)
    }

    super.dispatch(action)
  }
}

export default Dispatcher
