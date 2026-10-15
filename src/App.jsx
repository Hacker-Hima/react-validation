import { useState } from 'react'
import './App.css'

function App(){
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [pass,setpass]=useState("")
  const [user,setusers]=useState([])

  function check(){
    if(name===""||email===""||pass===""){
      alert("must enter all all details")
      return
    }

    else{
    if(pass !== "pass123@"){
      alert("invalid password")
      return
    }
      if(pass !== "pass123@"){
      alert("invalid password")
      return
    }
    setusers([...user,{
      name:name,
      email:email,
      pass:pass
    }])
  }
    setname("")
    setemail("")
    setpass("")
  }

  return(
    <div>
      Enter userName:
      <br></br>
      <input 
        type="text"
        value={name}
        onChange={(e)=>setname(e.target.value)}
        required
      />
      <br></br>
      Enter email:
      <br></br>
      <input 
        type="email"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        required
      />
      <br></br>
      Enter password:
      <br></br>
      <input 
        type="text"
        value={pass}
        onChange={(e)=>setpass(e.target.value)}
        minLength={"8"}
        required
      />
      <br></br>
      <button onClick={check}>Validate</button>
      <br></br>
      {user.length===0 && <p> user not yet validated</p> }
      {user.map((usr,ind)=>(
        <p key={ind}>
          {usr.name} || {usr.email}  ||  {usr.pass} 
        </p>
      ))}
    </div>
  )
}
export default App;
