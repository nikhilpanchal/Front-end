import Header from '../components/header'

const Dashboard = ({ name, bio, blog }) => (
  <>
    <Header />
    <h1>{name}</h1>
    <p>{`Bio: ${bio}`}</p>
    <p>{`Blog: ${blog}`}</p>
  </>
)

Dashboard.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/leerob')
  const user = await response.json()
  return user
}

export default Dashboard
