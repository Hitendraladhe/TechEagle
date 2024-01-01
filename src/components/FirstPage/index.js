import {Component} from 'react'

import {Link} from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'

import PlayGround from '../PlayGround'

import './index.css'

const initialList = [
  {
    id: uuidv4(),
    name: 'david',
    speed: 13,
    color: 'yellow',
  },
  {
    id: uuidv4(),
    name: 'Hit',
    speed: 12,
    color: 'red',
  },
  {
    id: uuidv4(),
    name: 'kalu',
    speed: 9,
    color: 'green',
  },
]

class FirstPage extends Component {
  state = {
    participantsList: initialList,
    nameValue: '',
    speedValue: '',
    colorValue: '',
    isRaceStart: false,
  }

  startRace = () => {
    this.setState(prevState => ({
      isRaceStart: !prevState.isRaceStart,
    }))
  }

  onAddRunners = event => {
    event.preventDefault()
    const {nameValue, speedValue, colorValue} = this.state

    const partDetails = {
      id: uuidv4(),
      nameValue,
      speedValue,
      colorValue,
    }

    this.setState(prevState => ({
      participantsList: [...prevState.participantsList, partDetails],
      nameValue: '',
      speedValue: '',
      colorValue: '',
    }))
  }

  onChangeName = event => {
    this.setState({nameValue: event.target.value})
  }

  onChangeSpeed = event => {
    this.setState({speedValue: event.target.value})
  }

  onChangeColor = event => {
    this.setState({colorValue: event.target.value})
  }

  render() {
    const {
      participantsList,
      nameValue,
      speedValue,
      colorValue,
      isRaceStart,
    } = this.state

    return (
      <>
        <div className="bg-container">
          <div className="formEle">
            <h1 className="heading">RUNNERS DETAILS</h1>
            <p>*you can add max 10 participants</p>
            <form className="form">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                onChange={this.onChangeName}
                value={nameValue}
                id="name"
              />

              <br />
              <label htmlFor="speed">Speed</label>
              <br />
              <input
                value={speedValue}
                id="speed"
                type="number"
                onChange={this.onChangeSpeed}
              />
              <br />
              <br />
              <label htmlFor="color">Color</label>
              <br />
              <input
                value={colorValue}
                id="color"
                type="text"
                onChange={this.onChangeColor}
              />
              <br />
              <label htmlFor="time">start Time</label>
              <br />
              <input type="text" id="time" placeholder="10:00" />
              <br />
              <button
                type="button"
                className="addbtn"
                onClick={this.onAddRunners}
              >
                + ADD RUNNER
              </button>
              <br />
            </form>
          </div>
          <div>
            <h1>List Of Participants</h1>
            <div className="listOfParticipant">
              <h3>Name</h3>
              <h3>Speed</h3>
              <h3>color</h3>
              <h3>Start Time</h3>
            </div>
            <div className="names">
              {participantsList.map(each => (
                <li key={each.id}>
                  <p>{each.name}</p>
                  <p>{each.speed}</p>
                  <p>{each.color}</p>
                  <p>-</p>
                </li>
              ))}
            </div>

            <button type="button" onClick={this.startRace} className="racebtn">
              Start Race
            </button>
          </div>
        </div>
        <div>{isRaceStart && <PlayGround data={participantsList} />}</div>
      </>
    )
  }
}

export default FirstPage
