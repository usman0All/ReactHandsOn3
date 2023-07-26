import React from 'react'
import { Component } from "react";
import DisplayForm from './DisplayForm';
import './style.css'
class FormClass extends Component{
    constructor(){
        super();
        this.state={
            Name:'',
            clicked:true,
            EmpData:[],
            Dept : " ",
            Rating : " "
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        this.setState({[e.target.dept]: e.target.value})
        this.setState({[e.target.Rating]: e.target.value})
    }
    toggleFunction=()=>{
        this.setState({clicked:!this.state.clicked})

    }
    handleClick=(e)=>{
        const empObj={
            name:this.state.Name,
            dept : this.state.Dept,
            Rating : this.state.Rating
        }
        this.state.EmpData.push(empObj)
        this.setState({
            EmpData:this.state.EmpData,
            Name:'',
            Dept:'',
            Rating:'',
            clicked:false
        })
        console.log(this.state.EmpData);
    }
    render(){
        return(
            <>
            <h1 id="heading">Employee Feedback Form</h1>
            {this.state.clicked ?
            <form id="form">
            <label htmlFor='name' className='name'>Name:</label>
            <input type="text" id="name" placeholder='Enter the name' value={this.state.Name}  name="Name" onChange={this.handleChange}/><br/>

            <label htmlFor="dept" className="dept">Department : </label>
            <input id="dept" type="text" placeholder="Enter Department" name="Dept" value={this.state.Dept} onChange={this.handleChange} required /><br/><br/>
            <label htmlFor="Rating" className="rate">Rating : </label>
            <input id="Rating" type="Rating" placeholder="Enter Rating" name="Rating" value={this.state.Rating} onChange={this.handleChange} required />
            <br/> <br/>
            <button  type="button" className="btn" onClick={this.handleClick}>Submit</button>
            </form>
            :
            <DisplayForm value={this.state.EmpData} toggleFunc={this.toggleFunction} />
            }
            
            </>
        )
    }
}
export default FormClass;