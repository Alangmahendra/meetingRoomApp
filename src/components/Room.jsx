import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import {room} from '../actions/inputAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Room extends Component {
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
    const ChooseRoom = localStorage.getItem('chooseRoom')
    this.props.room(ChooseRoom)
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

const mapStateToProps = (state) =>{
  return {
    choosenRoom:state.inputReducers
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    room
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)