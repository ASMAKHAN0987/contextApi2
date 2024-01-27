import React, {useState,useContext} from 'react'
import userContext from '../Context/UserContext'
function Login() {
    const [userName,setUserName] = useState("");
    const [password, setPassword] = useState('');
    const {setUser} = useContext(userContext);
    const handleSubmit = (e)=>{
       e.preventDefault();
       console.log("hello");
       console.log(userName);
       setUser({userName,password});
    }
  return (
    <>
      <div className='flex justify-center items-center flex-col'>
        <h2 >Login</h2>
        <input className='border-2 border-black' type="text" placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <input className='border-2 border-black' type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" onClick={handleSubmit} className='btn'>Submit</button>
      </div>
    </>
  )
}

export default Login