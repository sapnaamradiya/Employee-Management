//.........................EMPLOYEE MANAGEMENT = TABLE IN REACT .....................

import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      employee:[  // array of element
        {id:101,name:"sapna",age:20,city:"indore"},
        {id:102,name:"sonam",age:21,city:"ujjain"},
        {id:103,name:"sakku",age:22,city:"dewas"},
        {id:104,name:"aayushi",age:22,city:"indore"},
        {id:105,name:"gayatri",age:23,city:"rau"}
      ]
    }
  }
 add=()=>{
  var ov ={
    id:this.idbox.value ,
    name:this.namebox.value ,
     age:this.agebox.value ,
     city:this.citybox.value 
  }
  this.setState({employee:[...this.state.employee,ov]})

  this.clearbox()
 }

 clearbox=()=>{  
  this.idbox.value =" "
  this.namebox.value =" "
     this.agebox.value =" "
     this.citybox.value =" "
 }

 delete=(id)=>{
    this.setState({employee:this.state.employee.filter(emp=>emp.id!==id)})

 }
  render() {
    return (
      <div><h1>employee management </h1>
      <input ref={c=>this.idbox=c} placeholder='enter your id'></input>&nbsp;&nbsp;
      <input ref={c=>this.namebox=c} placeholder='enter your name'></input>&nbsp;&nbsp;
      <input ref={c=>this.agebox=c} placeholder='enter your age'></input>&nbsp;&nbsp;
      <input ref={c=>this.citybox=c} placeholder='enter your city'></input>&nbsp;&nbsp;
      <button onClick={this.add}>submit</button> 
      <hr></hr> 
      <table  cellPadding="20" cellSpacing="20" border="1px">

        <tr><th>S.No</th>
        <th>ID</th>
        <th>NAME</th>
        <th>AGE</th>
        <th>CITY</th>
        <th>DELETE</th></tr>

        {this.state.employee.map((emp,index)=>{
          return <tr>
            <td>{index+1}</td>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
            <td>{emp.city}</td>
          <td><button onClick={()=>this.delete(emp.id)}>DELETE</button></td>
        
          </tr>
        })
        }
        </table></div>
    )
  }
}



