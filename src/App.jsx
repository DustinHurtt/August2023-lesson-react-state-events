import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  const [theme, setTheme] = useState('light')

  const handleSelectThemeChange = (e) => {

    setTheme(e.target.value)

    console.log("Theme", e.target.value)

  }

  return (
    <div className={"App " + theme}>

      <h1>React - state and events</h1>

      <Counter />

      <select onChange={handleSelectThemeChange}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

    </div>
  )
}

export default App
