import React, { Component } from 'react'
import { Modal, Button, Header, Icon, Image,Input } from 'semantic-ui-react'
import homeicon from '../homeicon.png'

export default class Confirm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const CompanyName = localStorage.getItem('nameCompany')
    const Participants = localStorage.getItem('participants')
    const ChooseRoom = localStorage.getItem('chooseRoom')
    const StartIn = localStorage.getItem('dateStart')
    const EndIn = localStorage.getItem('dateEnd')
    return (
      <Modal trigger={<Button onClick={this.handleOpen}>Confirm</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
        dimmer='blurring'
        style={{"flex":1,"justifyContent":"center"}}
      >
        <Modal.Header>Meetings On {ChooseRoom}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={homeicon} />
          <Modal.Description>
            <h1>{CompanyName} Meetings</h1>
            <p>for {Participants} peoples</p>
            <p>will start in : {StartIn}</p>
            <p>will end in : {EndIn}</p>
            
          </Modal.Description>
        </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Got it
            </Button>
          </Modal.Actions>
      </Modal>
    )
  }
}
