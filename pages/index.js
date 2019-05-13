import Layout from '../components/Layout'
import Card from '../components/Card'
import Fetch from 'isomorphic-unfetch'
import  db  from '../data/fakeData';
import spring from '../assets/spring.jpg'

const Index = (props) => (
  <Layout>
      <div className="jumbotron bg-dark">
        <h1>Hello and Welcome!</h1>
        {/* <Prices coinData={props.data.USD.rate}/> */}
        BTC/USD: {props.data.bpi["USD"].rate}
      </div>

      <div className="row">
        <Card/>
        <Card/>
        <Card/>
      </div>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  const coinData = await res.json()

  return {
    data: coinData
  }
}
  
export default Index;