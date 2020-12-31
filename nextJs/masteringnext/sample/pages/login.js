import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()

  const onLogin = (e) => {
    e.preventDefault()

    router.push('/dashboard')
  }

  return (
    <>
      <input placeholder='User Name' />
      <input placeholde='Password' />
      <button onClick={onLogin} type='button'>
        Log in
      </button>
    </>
  )
}

export default Login
