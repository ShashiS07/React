import React,{useState} from "react";


const {Gender,setGender}=useState
const {Checkbox,setCheckbox}=useState
const {Image,setImage}
=useState
class Loginform extends React.Component{
    constructor(){
        super();
        this.state={
            "First Name":"",
            "Last Name":"",
            "email":"",
            "country":"India"
        }
    }
 
    handleFirstNameChange=(value)=> {
        this.setState({
            "First Name":value,
        })
    }
    handleLastNameChange=(value)=> {
        this.setState({
            "Last Name":value,
        })
    }
    handleEmail=(value)=>{
        this.setState({
            "email":value
        })
    }
    handleCountry=(value)=>{
        this.setState({
            "country":value
        })
    }
    handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted")
    }
    render(){
        return <div>
            <form onSubmit={(event)=>this.handleFormSubmit(event)}>
            <label>First Name:</label>
            <input type="text" value={this.state["First Name"]} onChange={
                (event)=>this.handleFirstNameChange(event.target.value)
            }/> <br/>
            <label>Last Name:</label>
            <input type="text" value={this.state["Last Name"]} onChange={
                (event)=>this.handleLastNameChange(event.target.value)
            }/>
            <div>
                <label>Email:</label>
                <input type="email" value={this.state.email} onChange={
                    (event)=>this.handleEmail(event.target.value)
                }/>
            </div>
            <div>
                <label>Do you want to Recieve Marketing Mails? </label> <br/>
                <input type="checkbox" value="Yes" onChange={(event)=>setCheckbox(event.target.value)}/>Yes
                <input type="checkbox" value="No" onChange={(event)=>setCheckbox(event.target.value)}/>No
            </div>
            <div>
                <label>Gender:</label>
                <input type="radio" name="Gender" value="Male" 
                onChange={(event)=>setGender(event.target.value)}/>Male
                <input type="radio" name="Gender" value="Female" 
                onChange={(event)=>setGender(event.target.value)}/>Female
            </div>
            <div>
                <label>Country:</label>
                <select value={this.state.country} onChange={
                    (event)=>this.handleCountry(event.target.value)
                }>
                    <option value="India">India</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Afganistan">Afganistan</option>
                    <option value="Australia">Australia</option>
                    <option value="England">England</option>
                </select>
            </div>
            <div>
                <label>Profile Picture: </label>
                <input type="file" onChange={(event)=>setImage(event.target.value)} />
            </div>
            <div>
                <button>Submit</button>
                <button>Reset</button>
            </div>
            </form>
            <div>
                <h2>Preview Form Data</h2>
            </div>
        </div>
    }
}

export default Loginform