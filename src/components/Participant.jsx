import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Participants} from '../actions/inputAction'

class Participant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      participants: ''
    }
  }

  componentDidMount(){
    this.props.Participants(this.state.participants)
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      localStorage.setItem('participants', this.state.participants)
    })
  }
  render() {
    return (
      <Form>
        <label>participant input:</label>
        <Form.Field type="number" name="participants" placeholder="Number of Participants" value={this.state.participants} control={Input} onChange={this.handleOnChange} />
      </Form>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    participant:state.inputReducers
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    Participants
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Participant)