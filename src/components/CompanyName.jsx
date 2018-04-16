import React, { Component } from 'react'
import {Form,Input} from 'semantic-ui-react'

export default class CompanyName extends Component {
  constructor(props){
    super(props)
    this.state={
      nameCompany:''
    }
  }
  
  handleOnChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    },()=>{
      localStorage.setItem('nameCompany',this.state.nameCompany)
    })
  }

  render() {
    return (
      <Form>
        <label>Company Name</label>
        <Form.Field name="nameCompany" value={this.state.nameCompany} placeholder="Companny Name" control={Input} onChange={this.handleOnChange}/>
      </Form>
    )
  }
}
