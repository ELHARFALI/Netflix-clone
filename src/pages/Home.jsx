import { Main, Row } from '../Components'
import { requests } from '../Requests'

const Home = () => {
  return (
      <>
      <Main />
      <Row title='Up Coming' fetchUrl={requests.requestUpcoming} />
      <Row title='Popular' fetchUrl={requests.requestPopular} />
      <Row title='Trending' fetchUrl={requests.requestTrending} />
      <Row title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Row title='Horror' fetchUrl={requests.requestHorror} />
    </>
  )
}

export default Home