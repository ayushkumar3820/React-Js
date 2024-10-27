import Header from './components/hearder'
import { Outlet } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Contexts/ThemeContext.js'

const App = () => {
   return (
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
  )
}

export default App