
class Card extends React.Component {

  render() {
  return (
    <div>
    {/* style={{maxWidth: "25%"}} */}
      <div className="card border-primary mb-3">
        <div className="card-header">{this.props.contacts}</div>
        <div className="card-body">
          <img src={this.props.photo} alt="" className="img-fluid"/>
          <p className="card-title">{this.props.price}</p>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
      <style jsx>{`
        img {
          height: 200px;
          width: 300px;
        }
        .card-title {
          margin-top: 10px;
        }
      `}</style>
    </div>
  )
  }
}

export default Card;