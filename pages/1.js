import Layout from "../components/Layout";
import Link from 'next/link'
import  db  from '../data/fakeData';


const Listing1 = (props) => {
 
  
 
    return (
      <Layout>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
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
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
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
        `}</style>
      </Layout>
    );
  
}

Listing1.getInitialProps = async ({ req }) => {
  return {
    name: db.data[1].name,
    description: db.data[1].description,
    photo: ''

  }
}

export default Listing1;
