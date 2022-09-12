import React from 'react'
import useForm from './useForm'

const Form = () => {
 
    const [value,onChange] =  useForm()
    console.log("sss",value)

    return (
        <form style={{display:'flex', flexDirection:'column', alignItems:'center',margin:20}}>
            <h1>Login Form</h1>
            <input name="email" placeholder="email" value={value.email||""}  onChange={onChange}></input>
            <input name="password" placeholder="password" value={value.password||""}  onChange={onChange}></input>
            <button onClick={()=>{}}>login</button>
        </form>)

}



export default Form