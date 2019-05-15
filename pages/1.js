import Layout from '../components/Layout'
import  db  from '../data/fakeData';
import Form from '../components/Form'
import pic1 from '../assets/aptOne1.jpg'
import pic2 from '../assets/aptOne2.jpg'
import pic3 from '../assets/aptOne3.jpg'
import pic4 from '../assets/aptOne4.jpg'
import pic5 from '../assets/aptOne5.jpg'
import pic6 from '../assets/aptOne6.jpg'




const Listing1 = (props) => {
 
  
 
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
                  <img src={pic1} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={pic2} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={pic3} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={pic4} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={pic5} alt="" />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <img src={pic6} alt="" />
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

Listing1.getInitialProps = async ({ req }) => {
  return {
    name: db.data[1].name,
    description: db.data[1].description,
    price: db.data[1].price,
    amenities:db.data[1].amenities,
    photo: ''

  }
}

export default Listing1;
