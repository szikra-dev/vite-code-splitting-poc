import { useParams } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { useUserPosts } from '../hooks/useUserPosts'

const UserPosts = () => {
  const { id } = useParams<{ id: string }>()

  const { user, isLoading: isUserLoading, error: userError } = useUser(id)

  const {
    userPosts,
    isLoading: isUserPostsLoading,
    error: postsError,
  } = useUserPosts(id)

  if (userError || postsError) {
    return (
      <>
        {userError && <div>{userError.message}</div>}
        {postsError && <div>{postsError.message}</div>}
      </>
    )
  }

  return (
    <div>
      <div>
        {isUserLoading ? (
          <div>User Info Loading...</div>
        ) : (
          <>
            <h2>User Info</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
          </>
        )}
      </div>
      <div>
        {isUserPostsLoading ? (
          <div>User Posts Are Loading...</div>
        ) : (
          <>
            <h2>Posts</h2>
            {userPosts.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>
                  <em>{post.body}</em>
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
export default UserPosts
