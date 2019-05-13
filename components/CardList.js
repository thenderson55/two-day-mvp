import Card from './Card'


class CardList extends React.Component {

  render() {
    return (
      <div className="row">
        <Card/>
        <Card/>
      </div>
    )
  }
}

export default CardList