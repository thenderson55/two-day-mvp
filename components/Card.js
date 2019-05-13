
class Card extends React.Component {

  state = {

  }

  render() {
  return (
    <div>
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