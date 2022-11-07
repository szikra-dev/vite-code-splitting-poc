import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../api'
import { User } from '../models/User'

export const useUsers = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  return { isLoading, error: error as Error, users: data?.data as User[] }
}
