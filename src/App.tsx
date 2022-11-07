import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Navbar = React.lazy(() => import('./components/Navbar'))
const Page = React.lazy(() => import('./components/Page'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Navbar />
        <Page />
      </Suspense>
    </Router>
  )
}

export default App
