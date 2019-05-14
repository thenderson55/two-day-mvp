import Layout from "../components/Layout";
import  db  from '../data/fakeData';
import Form from '../components/Form'
import a9mins1 from '../assets/a9mins1.jpg'
import a9mins2 from '../assets/a9mins2.jpg'
import a9mins3 from '../assets/a9mins3.jpg'
import a9mins4 from '../assets/a9mins4.jpg'
import a9mins5 from '../assets/a9mins5.jpg'
import a9mins6 from '../assets/a9mins6.jpg'




const Listing0 = (props) => {

    return (
      <Layout>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-subtitle text-muted">{props.price}</h6>
          </div>

          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={a9mins1} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={a9mins2} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={a9mins3} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={a9mins4} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={a9mins5} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={a9mins6} alt="" />
                </div>
              </div>
            </div>

          
            
          </div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.description}</li>
            <li className="list-group-item">{props.amenities}</li>
          </ul>
      
        </div>

        <Form></Form>


        <style jsx>{`
          img {
            height: 200px;
            width: 300px;
            margin-bottom: 20px;
          }
        `}</style>
      </Layout>
    );
  
}

Listing0.getInitialProps = async ({ req }) => {
  return {
    name: db.data[0].name,
    description: db.data[0].description,
    price: db.data[0].price,
    amenities:db.data[0].amenities,
    photo: ''

  }
}

export default Listing0;