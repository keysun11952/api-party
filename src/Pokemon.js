import React, { Component } from 'react'

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: {}
    }

    this.fetchItemData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.item !== this.props.match.params.item) {
      this.fetchItemData()
    }
  }

  fetchItemData = () => {
    const { params } = this.props.match
    fetch(`https://pokeapi.co/api/v2/item/${params.item}`)
      .then(response => response.json())
      .then(item => this.setState({ item }))
  }

  render() {
    const { item } = this.state

    return (
      <div className="Pokemon">
        <h3>Name: {item.name}</h3>
        <h2>ID: {item.id}</h2>
        <h2>Cost: {item.cost}</h2>
      </div>
    )
  }
}

export default Pokemon
