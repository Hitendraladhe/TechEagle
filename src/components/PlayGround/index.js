import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

class PlayGround extends Component {
  state = {
    count: 0,
  }

  tick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {data} = this.props
    const {name, speed} = data
    console.log(data)

    const overlayStyles = {
      backgroundColor: 'white',
    }

    const timer = Math.round(setTimeout(this.tick, 1000))
    const hours = Math.floor(timer / 360000)

    // Minutes calculation
    const minutes = Math.floor((timer % 360000) / 6000)

    // Seconds calculation
    const seconds = Math.floor((timer % 6000) / 100)

    return (
      <div className="container">
        {data.map(each => (
          <div className="first">
            <button
              type="button"
              style={{marginLeft: `${each.speed + minutes * 6}px`}}
              className="btn1"
            >
              {each.name}
            </button>
          </div>
        ))}

        <h1 className="timerCon">
          timer: {hours} : {minutes} :{seconds}
        </h1>

        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Finished
              </button>
            }
            overlayStyle={overlayStyles}
          >
            <div className="popupName">
              <p>Name</p>
              <p>Speed</p>
              <p>Rank</p>
            </div>
            {data.map(eachname => (
              <div className="popup">
                <p>{eachname.name}</p>
                <p>{eachname.speed}</p>
                {eachname.name === 'david' ? <p>Winner</p> : <p>-</p>}
              </div>
            ))}
          </Popup>
        </div>
      </div>
    )
  }
}
export default PlayGround
