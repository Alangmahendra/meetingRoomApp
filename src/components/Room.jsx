import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choosenRoom: 'Room 1',
      roomSelected: [
        { name: 'Room 1' },
        { name: 'Room 2' },
        { name: 'Room 3' },
        { name: 'Room 4' },
        { name: 'Room 5' },
        { name: 'Room 6' },
      ],
      choosenRoomError:false
    }
  }

  componentDidMount() {
    console.log(this.state.choosenRoom)
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      localStorage.setItem('chooseRoom', this.state.choosenRoom)
    })
  }

  render() {
    const { choosenRoom, roomSelected } = this.state
    return (
      <Form>
        <label>Room:</label>
        <Form.Field control="select" name="choosenRoom" value={choosenRoom} onChange={this.handleOnChange}>
          {
            roomSelected.map((room) => <option value={room.name} key={room.name}>{room.name}</option>)
          }
        </Form.Field>
      </Form>
    )
  }
}
