import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    // yaha apan context ko provide kr rahe h, sabhi inner childrens ko
    
    <UserContextProvider>
      <h1>Hello</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
