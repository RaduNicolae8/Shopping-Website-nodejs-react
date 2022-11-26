import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./App.css";


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

const [usernameReg, setUsernameReg] = useState("");
const [passwordReg, setPasswordReg] = useState("");

const register = () => {
  //console.log("b");
  axios.post('http://localhost:5000/registerService' , {
    username: usernameReg, 
    password: passwordReg
  }).then((response) =>{
    console.log(response);
    console.log(response.data);
    // console.log("a1");
    alert("Registration successful");
  }).catch((error) => {
   // console.log("b2");
    if( error.response.data.message == "Duplicate");
    alert("Username already exists.")

  } )
};

const login = () => {
  console.log("b");
  axios.post('http://localhost:5000/loginService' , {
    username: usernameReg, 
    password: passwordReg
  }).then((response) =>{
    console.log(response);
    console.log(response.data);
    // console.log("a1");
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
      <label>username</label>
      <input
       type="text" 
       onChange ={(e) => {
        setUsernameReg(e.target.value);
       }} 
       /> <br/>
      <label>password</label>
      <input
       type="password" 
       onChange ={(e) => {
        setPasswordReg(e.target.value);
       }} 
       /> <br/>
      <button onClick={register}> Register </button>
    </div>
    <div className="login ">
        <h1>Login</h1>
        <label>username</label>
      <input
       type="text" 
       onChange ={(e) => {
        setUsernameReg(e.target.value);
       }} 
       /> <br/>
      <label>password</label>
      <input
       type="password" 
       onChange ={(e) => {
        setPasswordReg(e.target.value);
       }} 
       /> <br/>
        <button onClick={login}> Login </button>
    </div>
  </div>
)

}
export default App