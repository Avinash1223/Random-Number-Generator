// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickNumber = () => {
    console.log('button is clicked')

    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({number: prevState.number + randomNum}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="Bg-container">
        <div className="RandomNumber-container">
          <h1 className="heading">Random Number</h1>
          <p className="tagLine">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onClickNumber}>
            Generate
          </button>
          <p className="numberGenerated">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
