import React from 'react'
import Navbar from './components/Navbar'

export const App = () => {

  const [theme, setTheme] = React.useState('light')
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App