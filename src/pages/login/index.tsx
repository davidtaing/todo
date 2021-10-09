import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <label htmlFor="email">Email:</label><br/>
      <input id="email" type="email" placeholder="Email Address" /> <br/>
      <label htmlFor="password">Password:</label><br/>
      <input id="password" type="password" placeholder="Password" />
    </div>
  )
}

export default Home
