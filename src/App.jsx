import { useState } from 'react'
import LoginWithGithub from './components/loginWithGithub.jsx'
import LoginWithGoogle from './components/LoginWithGoogle.jsx'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
     <h1>Login With</h1>
     <LoginWithGithub/>
     <LoginWithGoogle/>
     </div>
    </>
  )
}

export default App
