import React, { Component, PropTypes } from "react"

const storable = (stores = [], getState) => {
  return (Decorated) => {
    return (
      class extends Component {
        static propTypes = {
          stores: PropTypes.object
        }

        constructor(props) {
          super(props)
          this.state = getState(props)
        }

        componentWillMount() {
          stores.forEach((store) => {
            this.props.stores[store].addChangeListener(::this.handleChange)
          })
        }

        componentWillUnmount() {
          stores.forEach((store) => {
            this.props.stores[store].removeChangeListener(::this.handleChange)
          })
        }

        handleChange() {
          this.setState(getState(this.props))
        }

        render() {
          return <Decorated {...this.props} {...this.state} />
        }
      }
    )
  }
}

export default storable
