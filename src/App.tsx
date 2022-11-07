import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Page } from './components/Page'

function App() {
  return (
    <Router>
      <Navbar />
      <Page />
    </Router>
  )
}

export default App
