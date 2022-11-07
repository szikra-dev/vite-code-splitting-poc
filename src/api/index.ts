import axios from 'axios'

export const getUsers = async () =>
  axios.get('https://jsonplaceholder.typicode.com/users/')

export const getUser = async (id: string) =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

export const getUserPosts = async (userId: string) =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
