import useSwr from 'swr'
import Header from '../components/header'

const fetcher = async (path) => {
  const response = await fetch(path)

  return await response.json()
}

const Profile = () => {
  const { data, error } = useSwr('/api/users/1', fetcher)

  if (error) {
    return <div>Failed to load</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <h1>Hello {data.name}</h1>
      <p>id: {data.id}</p>
      <p>email: {data.email}</p>
    </>
  )
}

export default Profile
