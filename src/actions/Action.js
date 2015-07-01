class Action {
  constructor({dispatcher}) {
    this.dispatcher = dispatcher
  }

  dispatch({action, success, failure}) {
    action
      .then((response) => this.dispatcher.dispatch({type: success, data: response}))
      .catch((error) => this.dispatcher.dispatch({type: failure, data: error}))
  }
}

export default Action
