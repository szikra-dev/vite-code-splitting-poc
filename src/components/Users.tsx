import { useUsers } from '../hooks/useUsers'
import styled from 'styled-components/macro'
import { User } from '../models/User'
import { useHistory, generatePath } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const Card = styled.div`
  padding: 16px;
  border: 1px solid #dddddd;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`

const Users = () => {
  const history = useHistory()
  const { users, isLoading, error } = useUsers()

  if (error) {
    return <div>{error.message}</div>
  }

  const handleRedirect = (id: number) => {
    const path = generatePath('/users/:id/posts', { id })
    history.push(path)
  }

  return (
    <Container>
      {isLoading && <div>Loading...</div>}
      {users && (
        <>
          {users.map((user: User) => (
            <Card key={user.id} onClick={() => handleRedirect(user.id)}>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </Card>
          ))}
        </>
      )}
    </Container>
  )
}

export default Users
