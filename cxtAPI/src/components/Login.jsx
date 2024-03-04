import {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // ye connection establish hua h context aur component k beech m
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username, password})
    } 
  return (
    <div>
      <h1>User Details</h1>
      <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter User Name'/>
      <br />
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password'/>
      <br />
      <button onClick={handleSubmit} >Login</button>
    </div>
  );
}

export default Login;
