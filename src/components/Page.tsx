import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'

const Home = React.lazy(() => import('./Home'))
const Users = React.lazy(() => import('./Users'))
const UserPosts = React.lazy(() => import('./UserPosts'))

const Container = styled.div`
  width: 100vw - 48px;
  height: 100vh;
  padding: 24px;
`

const Page = () => (
  <Container>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/users/:id">
        <UserPosts />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </Switch>
  </Container>
)

export default Page
