import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

export default class Participant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      participants: ''
    }
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
