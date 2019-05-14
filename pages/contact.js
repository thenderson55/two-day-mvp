import Layout from '../components/Layout'
import Form from '../components/Form'

const Contact = () => (
  

    <Layout>
      <div className="contact-info">
        <h5>Email: thenderson55@yahoo.com</h5>
        <h5>Telephone: +81 (0)80 4944 0848</h5>
        <h5>Line: toto55555</h5>
      </div>
      
      <Form></Form>
      <style jsx>{`
          h5 {
            margin: 20px 0;
          }
          .contact-info {  
            margin-top: 50px;
          }
        `}
      </style>
    </Layout>
  
)


export default Contact