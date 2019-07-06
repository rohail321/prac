import React, { Component } from 'react'
import './form.css';
import { Button } from 'react-bootstrap';


class Forms extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:'',
            class:'',
            rollNumber:'',
            student:[]
        }
        this.setFname=this.setFname.bind(this);
        this.setLname=this.setLname.bind(this);
        this.clicked=this.clicked.bind(this)
        this.getStudent=this.getStudent.bind(this)

    }

    setFname(firstnames){
        this.setState({firstname:firstnames.target.value});

    }
    setLname(lastnames){
        this.setState({lastname:lastnames.target.value});
        

    }

    clicked(e){
        e.preventDefault();
        this.state.student.push({firstname:this.state.firstname});
        // this.setState({firstname:'sarfaraz'});
        // this.setState({lastname:'ahmed'});
        this.getStudent(); 
        console.log(this.state.student) 


    }
    getStudent(){
        const stds=this.state.student.map((s)=>{
            console.log(s.firstname) 

            return(s.firstname)
        });
        console.log(stds) 

        return stds
    }


    render(){
        
        
        return(<div className="forms">
            
            
            
            <form className="form">
            <div className="form-name">
           
                <div >
                <label><strong>First Name</strong></label>
                <input className="fn-input" type="text" onChange={this.setFname} value={this.state.firstname}  placeholder="firstname" />
                </div>
                <div>
                <label><strong>Last Name</strong></label>
                <input className="ln-input" type="text"  onChange={this.setLname} value={this.state.lastname}  placeholder="lastname"  />               
                </div>
               
            </div>
            
            <Button onClick={this.clicked } variant="primary">Submit</Button>

            
            </form>

            <form className="form">
            <div className="form-name">  <label ><strong>First Name:</strong></label>
            <p>{this.state.firstname}</p>
            <label ><strong>Last Name:</strong></label>
            <p>{this.state.lastname}</p>
            </div>
            
          
            
            
            
            </form>
           
            
            
            
            {/* <Resturant/> */}
            
           
            

        </div>);

    }
}

export default Forms;