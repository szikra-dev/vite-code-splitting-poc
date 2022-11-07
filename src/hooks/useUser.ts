import { useQuery } from '@tanstack/react-query'
import { getUser } from '../api'
import { User } from '../models/User'

export const useUser = (id: string) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['single-user'],
    queryFn: () => getUser(id),
  })

  return { isLoading, error: error as Error, user: data?.data as User }
}
