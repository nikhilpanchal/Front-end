import Header from '../../../components/header'

const Post = ({ title, body }) => (
  <>
    <Header />
    <h1>{title}</h1>
    <p>{body}</p>
  </>
)

Post.getInitialProps = async ({ query }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
  const post = await response.json()

  return post
}

export default Post
