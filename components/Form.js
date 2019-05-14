
class Form extends React.Component {


  render() {
  return (
    <div>
      <form className="inquiry-form">
    
        <legend>Inquiry Form</legend>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
  
        <div className="form-group">
          <label for="exampleTextarea">Inquiry Details ( availability, etc.)</label>
          <textarea className="form-control" />
        </div>   
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <style jsx>{`   
       .inquiry-form {
         margin: 50px 0;
       }
     `}</style>
    </div>
  )
  }
}

export default Form;