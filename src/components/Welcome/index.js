// Write your code here

import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribing = () => {
    this.setState(prevState => {
      if (prevState.isSubscribed === true) {
        return {isSubscribed: false}
      }
      return {isSubscribed: true}
    })
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning.</p>
        <button type="button" onClick={this.onSubscribing}>
          {isSubscribed ? 'subscribed' : 'subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
