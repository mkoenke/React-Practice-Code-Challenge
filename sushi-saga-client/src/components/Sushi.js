import React from "react"

class Sushi extends React.Component {
  state = { beenClicked: false }

  localEatenHandler = () => {
    this.setState({ beenClicked: true })
    this.props.eatenHandler(this.props.sushiObj)
  }
  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.localEatenHandler}>
          {this.state.beenClicked ? null : (
            <img src={this.props.sushiObj.img_url} width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.sushiObj.name} - ${this.props.sushiObj.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
