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

const [usernameReg, setUsernameReg] = useState("rad");
const [passwordReg, setPasswordReg] = useState("rad");

const register = () => {
  console.log("b");
  axios.post('http://localhost:5000/register' , {
    username: usernameReg, 
    password: passwordReg
  }).then((response) =>{
    console.log(response);
    console.log(response.data);
    console.log("a1");
  }).catch((error) => {
   // console.log("b2");
    if( error.response.data.message == "Duplicate");
    alert("Username already exists.")

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
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Password..." />
        <button> Login </button>
    </div>
  </div>
)

}
export default App