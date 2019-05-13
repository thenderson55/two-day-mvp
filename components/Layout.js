import Head from 'next/head'
import Navbar from './Navbar'


const Layout = (props) => {
  return ( 
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css"/>
        <title>Tokyo Monthly</title>
      </Head>
      <Navbar/>
      <div className="container">
       {props.children}
      </div>
    </div>
    
  )
}

export default Layout;