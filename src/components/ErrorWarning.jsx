import React, { Component } from 'react'
import {Modal} from 'semantic-ui-css'

export default class Warning extends Component {
  render() {
    return (
     <Modal trigger={this.props.error}>
       <Modal.Content>
         <p>all field must be filled</p>
       </Modal.Content>
     </Modal>
    )
  }
}
