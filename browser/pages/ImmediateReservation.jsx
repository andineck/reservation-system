import React, { Component } from 'react'
import { post } from 'superagent'

class ImmediateReservationPage extends Component {
  constructor () {
    super()
    this.state = {
      game: 'asteroid',
      team: false,
      players: []
    }
  }

  render () {
    return (
      <div className='container'>
        <h1>Play now</h1>
        you are just a few clicks away...
        <div className='buttons has-addons'>
          <button
            className={
              this.state.team ? 'button' : 'button is-info is-selected'
            }
            onClick={() => this.setState({ team: false })}
          >
            Single
          </button>
          <button
            className={
              this.state.team ? 'button is-info is-selected' : 'button'
            }
            onClick={() => this.setState({ team: true })}
          >
            Team
          </button>
        </div>
        <div className='field'>
          <label className='label'>Player 1</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='Text input'
              onChange={event => this.setState({ player1: event.target.value })}
            />
          </div>
        </div>
        {this.state.team && (
          <div className='field'>
            <label className='label'>Player 2</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Text input'
                onChange={event =>
                  this.setState({ player2: event.target.value })}
              />
            </div>
          </div>
        )}
        <br />
        Game Selection
        <div className='control'>
          <label className='radio'>
            <input
              type='radio'
              name='asteroid'
              value='asteroid'
              checked={this.state.game === 'asteroid'}
              onChange={e => this.handleOptionChange(e)}
            />
            Asteroid
          </label>
          <label className='radio'>
            <input
              type='radio'
              name='balloonHunt'
              value='balloonHunt'
              checked={this.state.game === 'balloonHunt'}
              onChange={e => this.handleOptionChange(e)}
            />
            Balloon Hunt
          </label>
          <label className='radio'>
            <input
              type='radio'
              name='unicornRainbow'
              value='unicornRainbow'
              checked={this.state.game === 'unicornRainbow'}
              onChange={e => this.handleOptionChange(e)}
            />
            Unicorn Rainbow
          </label>
          <label className='radio'>
            <input
              type='radio'
              name='batRace'
              value='batRace'
              checked={this.state.game === 'batRace'}
              onChange={e => this.handleOptionChange(e)}
            />
            Bat Race
          </label>
        </div>
        <br />
        <div className='buttons'>
          <button
            className='button is-success'
            onClick={() => this.submitReservation()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }

  handleOptionChange (changeEvent) {
    this.setState({
      game: changeEvent.target.value
    })
  }

  async submitReservation () {
    console.log('state', this.state)
    const reservation = {
      entrytime: Date.now(),
      complete: this.state.team,
      players: [this.state.player1, this.state.player2],
      game: this.state.game
    }
    const response = await post('/instant-reservations').send(reservation)
    console.log('response', response)
  }
}

exports.ImmediateReservationPage = ImmediateReservationPage
