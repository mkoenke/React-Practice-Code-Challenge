import React, { Fragment } from "react"
import MoreButton from "../components/MoreButton"
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  const sushiArray = () => {
    return props
      .sushiArray()
      .map((sushiObj) => (
        <Sushi sushiObj={sushiObj} eatenHandler={props.eatenHandler} />
      ))
  }
  return (
    <Fragment>
      <div className="belt">
        {sushiArray()}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
