import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'

import Fetch from 'isomorphic-unfetch'
import  db  from '../data/fakeData';
import spring from '../assets/spring.jpg'
import mountain from '../assets/mountain.jpg'
import xmas from '../assets/xmas.jpg'



class Index extends React.Component {
  constructor(){
    super()
    
    this.state = {
      btc: 'Hello',
      cards: [
        {
        name: db.data[0].name,
        description: db.data[0].description,
        photo: spring
      },
        {
        name: db.data[1].name,
        description: db.data[1].description,
        photo: mountain
      },
        {
        name: db.data[2].name,
        description: db.data[2].description,
        photo: xmas
      }    
    ]
    }
  }


  render (){
    return (
    <Layout>
        <div className="jumbotron bg-dark">
          <h1>Hello and Welcome!</h1>
          BTC/USD: {this.props.data.time.updated}
        </div>
        <div className="row">
          {this.state.cards.map(card => {
            return <Card contacts={card.name} description={card.description} photo={card.photo} />
          })}
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