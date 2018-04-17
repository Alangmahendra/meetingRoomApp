import React, { Component } from 'react'
import {Form,Input} from 'semantic-ui-react'
import {DateTime} from '../actions/inputAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class DateInput extends Component {
  constructor(props){
    super(props)
    this.state={
      dateStart:'',
      dateEnd:''
    }
  }

  componentDidMount(){
    const {dateEnd,dateStart} = this.state
    this.props.DateTime(dateStart,dateEnd)
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
const mapStateToProps = (state) =>{
  return {
    dateTime:state.inputReducers
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({
    DateTime
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DateInput)
