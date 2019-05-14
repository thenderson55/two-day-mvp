import Layout from '../components/Layout'
import Card from '../components/Card'
import Link from 'next/link'

import Fetch from 'isomorphic-unfetch'
import  db  from '../data/fakeData';
import spring from '../assets/spring.jpg'
import mountain from '../assets/mountain.jpg'
import xmas from '../assets/xmas.jpg'




const Index = (props) => {
    return (
      <Layout>
          <div className="jumbotron bg-dark">
            <h1>Hello and Welcome!</h1>
            BTC/USD: { props.data.time.updated}
          </div>
          <div className="row">
            {props.cards.map((card, i) => {
              return <Link href={i} key={i}><a className="col card-link">
                <Card contacts={card.name} price={card.price} description={card.description} photo={card.photo} />
              </a>
              </Link>
            })}
          </div>

          <div className="container text-center">
            <h4>Monthly Rentals in Japan</h4>
            <p>In Japan, you can rent an apartment for 30 days or more without a license. However Airbnb and other booking sites have made it policy not to accept any listings unless they have a short-term booking license. Hence, I have created this site to hopefully allow medium-term visitors to Tokyo to find affordable monthly accomodation.</p>
          </div>
          <style jsx>{`
          .card-link{
            text-decoration: none;
            color: black;
          }
          .card-link:hover{
            cursor: pointer; 
          }
          `}</style>
      </Layout>
    )
    
   
}

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  const coinData = await res.json()

  return {
    data: coinData,
    cards: [
      {
      name: db.data[0].name,
      description: db.data[0].description,
      price: db.data[0].price,
      photo: spring
    },
      {
      name: db.data[1].name,
      description: db.data[1].description,
      price: db.data[0].price,
      photo: mountain
    },
      {
      name: db.data[2].name,
      description: db.data[2].description,
      price: db.data[0].price,
      photo: xmas
    }    
  ]
  }
}
  
export default Index;