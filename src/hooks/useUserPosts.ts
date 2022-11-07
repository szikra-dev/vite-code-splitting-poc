import { useQuery } from '@tanstack/react-query'
import { getUserPosts } from '../api'
import { Post } from '../models/Post'

export const useUserPosts = (userId: string) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['usersPosts'],
    queryFn: () => getUserPosts(userId),
  })

  return { isLoading, error: error as Error, userPosts: data?.data as Post[] }
}
