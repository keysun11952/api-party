import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Poke.css'
import Pokemon from './Pokemon'

class Poke extends Component {
    state = {
        item: '',
    }

    handleChange = (ev) => {
        this.setState({ item: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/poke/${this.state.item}`)
    }

    render() {
        return (
            <div className="Poke">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                    alt="Pokemon"
                    className="logo"
                />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter a item"
                            value={this.state.item}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Look up Pokemon item
                        </button>
                    </div>
                </form>

                <Route path="/poke/:item" component={Pokemon} />
            </div>
        )
    }
}

export default Poke
