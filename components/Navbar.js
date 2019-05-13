import Link from 'next/link'


const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Tokyo Monthly</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  //   <Link href="/">
  //   <a className="navbar-brand">Tokyo Monthly</a></Link>
  //   {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button> */}
  //   <div className="collapse navbar-collapse" id="navbarColor01">
  //     <ul className="navbar-nav mr-auto">
  //       <li className="nav-item active">
  //         <a className="nav-link">YOLO <span className="sr-only">(current)</span></a>
  //       </li> 
  //       <li className="nav-item">
  //         <Link href="/about">
  //         <a className="nav-link">About</a></Link>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
)

export default Navbar;