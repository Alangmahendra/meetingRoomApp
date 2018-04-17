import React, { Component } from 'react'
import {Form,Input} from 'semantic-ui-react'
import {Company} from '../actions/inputAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class CompanyName extends Component {
  constructor(props){
    super(props)
    this.state={
      nameCompany:''
    }
  }

  componentDidMount(){
    const CompanyName = localStorage.getItem('nameCompany')
    this.props.Company(CompanyName)
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

const mapStateToProps = (state) =>{
  return {
    companyName:state.inputReducers
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    Company
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyName)
