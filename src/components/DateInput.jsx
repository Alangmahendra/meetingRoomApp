import React, { Component } from 'react'
import {Form,Input} from 'semantic-ui-react'

export default class componentName extends Component {
  constructor(props){
    super(props)
    this.state={
      dateStart:'',
      dateEnd:''
    }
  }

  handleOnChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    },()=>{
      localStorage.setItem('dateStart',this.state.dateStart)
      localStorage.setItem('dateEnd',this.state.dateEnd)
    })
  }

  render() {
    return (
      <Form>
        <Form.Group inline>
        <label>Date input:</label>
        <Form.Field label="from :" name="dateStart" value={this.state.dateStart}  type="datetime-local" placeholder="date and time start" control={Input} onChange={this.handleOnChange}/> 
        <Form.Field label="to :"name="dateEnd" value={this.state.dateEnd} type="datetime-local" placeholder="date and time end" control={Input} onChange={this.handleOnChange}/> 
        </Form.Group>
      </Form>
    )
  }
}
