import Layout from "./Layout";

class Listing extends React.Component {
  render() {
    return (
      <Layout>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Name</h5>
            <h6 className="card-subtitle text-muted">Price</h6>
          </div>

          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-4">
                  <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src="https://source.unsplash.com/random" alt="" />
                </div>
              </div>
            </div>

          
            
          </div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">{this.props.description}</li>
            <li className="list-group-item">{this.props.amenities}</li>
            <li className="list-group-item">{this.props.reviews}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>

        <style jsx>{`
          img {
            height: 200px;
            width: 300px;
          }

          .photo-row {
            margin-top: 20px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Listing;