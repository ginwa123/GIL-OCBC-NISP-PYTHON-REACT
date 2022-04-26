function Home ({ history }) {
  return (
    <>
      <button onClick={() => history.push('/users')}>Users List</button>
    </>
  )
}

export default Home
