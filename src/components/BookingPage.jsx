import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'
import Room from './Room'
import Paricipant from './Participant'
import Date from './DateInput'
import Company from './CompanyName'
import Confirm from './Confirm'

export default class Booking extends Component {
  render() {
    const styles={
      "marginTop":"50px"
    }
    return (
      <Container>
        <Segment style={styles}>
          <Room />
          <Paricipant />
          <Date />
          <Company />
          <Confirm />
        </Segment>
      </Container>
    )
  }
}
