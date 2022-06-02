import React, { useState, } from 'react'
import PT from 'prop-types'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



const initialFormValues = {
  username: '',
  password: '',
}
export default function LoginForm(props) {
  
  const [values, setValues] = useState(initialFormValues)
 const {login, setMessage, setSpinnerOn} = props
  const navigate = useNavigate()

 

  // ✨ where are my props? Destructure them here
//review
  const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
   
  }

  const onSubmit = evt => {
    evt.preventDefault()
    // ✨ implement
    login(values);
    setMessage("")
    setSpinnerOn(true);
    
    axios.post("http://localhost:9000/api/login",values)
    .then(res=>{
      localStorage.setItem("token", res.data.token)
      navigate("/articles")
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const isDisabled = () => {
    // ✨ implement
    // Trimmed username must be >= 3, and
    // trimmed password must be >= 8 for
    // the button to become enabled
    if(values.username.length >= 3 && values.password.length >= 0){
      return false
    }else {
      return true 
    }
  }

  return (
    <form id="loginForm" onSubmit={onSubmit}>
      <h2>Login</h2>
      <input
       name = "username"
        maxLength={20}
        value={values.username}
        onChange={onChange}
        placeholder="Enter username"
        id="username"
      />
      <input
        type ="password"
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Enter password"
        id="password"
      />
      <button type ="submit" disabled={isDisabled()} id="submitCredentials">Submit credentials</button>
    </form>
  )
}

// 🔥 No touchy: LoginForm expects the following props exactly:
LoginForm.propTypes = {
  login: PT.func.isRequired,
}
