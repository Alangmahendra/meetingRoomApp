import React, { Component } from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
import moment from 'moment'
import Room from './Room'
import Paricipant from './Participant'
import Date from './DateInput'
import Company from './CompanyName'
import Confirm from './Confirm'

export default class Booking extends Component {
  render() {
    return (
      <Container>
        <Room/>
        <Paricipant/>
        <Date/>
        <Company/>
        <Confirm/>
      </Container>
    )
  }
}
