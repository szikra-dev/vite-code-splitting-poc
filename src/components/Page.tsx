import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Home } from './Home'
import { Users } from './Users'
import { UserPosts } from './UserPosts'

const Container = styled.div`
  width: 100vw - 48px;
  height: 100vh;
  padding: 24px;
`

export const Page = () => (
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
