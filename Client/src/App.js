import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./App.css";
import Button from '@mui/material/Button';
import Textfield from '@mui/material/TextField';




function App() {

//   const [backendData, setBackendData] = useState ([{}])
  
//   useEffect(() =>{
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])

//   return (
//     <div>

//     {(typeof backendData.users === 'undefined') ? (
//       <p>Loading...</p>
//     ): (
//       backendData.users.map((user,i) => (
//         <p key={i}>{user}</p>
//       ))
//     )}

//     </div>
//   )
// }

const [usernameReg, setUsernameReg] = useState('');
const [passwordReg, setPasswordReg] = useState('');

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [loginStatus, setLoginStatus]= useState('');

const register = () => {
  //console.log("b");
  axios.post('http://localhost:5000/registerService' , {
    username: usernameReg, 
    password: passwordReg
  }).then((response) =>{
    console.log(response);
    console.log(response.data);
    // console.log("a1");
    setUsernameReg('');
    setPasswordReg('');
    alert("Registration successful");
  }).catch((error) => {
   // console.log("b2");
    if( error.response.data.message === "Duplicate");
    alert("Username already exists.")

  } )
};

const login = () => {
  console.log("b");
  axios.post('http://localhost:5000/loginService' , {
    username: username, 
    password: password
  }).then((response) =>{
    console.log(response);
    console.log(response.data);
    // console.log("a1");
    setUsername('');
    setPassword('');
    alert("Login successful");
    
  }).catch((error) => {
   // console.log("b2");
    alert("Bad credentials.")

  } )
};

return(
  
  <div className = "App">
    <div className = "registration">
      <h1>Registration</h1>
      <Textfield
       type="text"
       label = "Username" 
       value= {usernameReg}
       variant = "outlined"
       onChange ={(e) => {
        setUsernameReg(e.target.value);
       }} 
       /> <br/>
      <Textfield
       type="password" 
       label = "Password"
       variant = "outlined"
       value = {passwordReg}
       onChange ={(e) => {
        setPasswordReg(e.target.value);
       }} 
       /> <br/>
      <Button variant = "contained" onClick={register}> Register </Button>
    </div>
    <div className="login ">
        <h1>Login</h1>
      <Textfield
       type="text"
       label="Username"
       variant="outlined" 
       value = {username}
       onChange ={(e) => {
        setUsername(e.target.value);
       }} 
       /> <br/>
      <Textfield
       type="password" 
       label = "Password"
       variant = "outlined"
       value = {password}
       onChange ={(e) => {
        setPassword(e.target.value);
       }} 
       /> <br/>
        <Button 
        variant="contained"
        color = "secondary"
         onClick={login}
         > Login </Button>
    </div>
  </div>
)

}
export default App