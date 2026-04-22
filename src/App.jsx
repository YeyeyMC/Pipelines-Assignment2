import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    return (
        <div>
            <h1>React Pipeline Assignment</h1>
            <p>This site is being deployed automatically with GitHub Actions</p>
            <p>This site is a second text to see if the changes are being pushed and the deploy works</p>
        </div>
  )
}

export default App
