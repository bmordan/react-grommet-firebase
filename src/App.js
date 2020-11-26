import {useState, useEffect} from 'react'
import { Grommet, Header, Main } from 'grommet'
import theme from './theme.json'
import Login from './Login'
import RestaurantsPage from './RestaurantsPage'
import RestaurantPage from './RestaurantPage'
import { A, useRoutes } from 'hookrouter'
import { User } from './models'

const routes = {
  "/": () => <Login />,
  "/restaurants": () => <RestaurantsPage />,
  "/restaurants/:id": ({ id }) => <RestaurantPage id={id} />
}

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = User.onAuth(setUser)
    return () => unsubscribe()
  }, [])

  return (
    <Grommet theme={theme}>
      <Header background="brand" pad="medium" justify="start">
        <A href="/">My App</A> <A href="/restaurants">Restaurants</A>
        {user ? <span onClick={() => User.signOut()}>Signout</span> : null}
      </Header>
      <Main pad="medium" direction="column" align="center">
        {useRoutes(routes)}
      </Main>
    </Grommet>
  )
}
export default App;

/**
 * 
<A href="/"><Button primary label="My Restaurant App" /></A>
<A href="/restaurants"><Button primary label="All Restaurants" /></A>
 */