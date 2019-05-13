import Link from 'next/link'
import  db  from '../data/fakeData';
import spring from '../assets/spring.jpg'

// console.log(db)

// const data = () =>  {
//   fetch('./data/apartments.json')
//     .then(response => response.json())
//     .then(info => {
//       this.db = json
//     })
//   }

class Card extends React.Component {

  state = {

  }

  render() {
  return (
    <div className="col">
    {/* style={{maxWidth: "25%"}} */}
      <div className="card border-primary mb-3">
        <div className="card-header">{this.props.contacts}</div>
        <div className="card-body">
          <img src={this.props.photo} alt="" className="img-fluid"/>
          <h4 className="card-title">Primary card title</h4>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    </div>
  )
  }
}

export default Card;