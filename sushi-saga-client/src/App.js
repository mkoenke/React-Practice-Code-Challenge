import React, { Component } from "react"
import SushiContainer from "./containers/SushiContainer"
import Table from "./containers/Table"

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = { sushiArray: [], index: 0, money: 100, eaten: [] }
  componentDidMount() {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ sushiArray: data })
        console.log(data)
      })
  }

  fourSushi = () => {
    return this.state.sushiArray.slice(this.state.index, this.state.index + 4)
  }

  moreSushi = () => {
    let newIndex = this.state.index + 4
    this.setState({ index: newIndex })
  }
  eatenHandler = (obj) => {
    console.log(obj)
    let leftOverMoney = this.state.money - obj.price
    let newArray = [...this.state.eaten, obj]
    if (leftOverMoney >= 0 && !this.state.eaten.includes(obj)) {
      this.setState({ eaten: newArray, money: leftOverMoney })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          moreSushi={this.moreSushi}
          sushiArray={this.fourSushi}
          eatenHandler={this.eatenHandler}
        />
        <Table eaten={this.state.eaten} money={this.state.money} />
      </div>
    )
  }
}

export default App
