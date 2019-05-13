import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'

import Fetch from 'isomorphic-unfetch'
import  db  from '../data/fakeData';
import spring from '../assets/spring.jpg'

class Index extends React.Component {
  constructor(){
    super()

    this.state = {
      btc: 'Hello',
      name: db.data
    }
  }

 

  render (){
    return (
    <Layout>
        <div className="jumbotron bg-dark">
          <h1>Hello and Welcome!</h1>
          {this.state.btc}
          {/* <Prices coinData={props.data.USD.rate}/> */}
          BTC/USD: {this.props.data.time.updated}
          {this.state.name[2].name}
        </div>
  
        <div className="row">
          <Card contacts={this.state.name[0].name} description={this.state.name[0].description}/>
          <Card contacts={this.state.name[1].name} description={this.state.name[1].description}/>
          <Card contacts={this.state.name[2].name} description={this.state.name[2].description}/>
        </div>
    </Layout>
    )
  }  
}

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  const coinData = await res.json()

  return {
    data: coinData,
  }
}
  
export default Index;