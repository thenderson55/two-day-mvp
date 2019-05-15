
/* /components/Layout.js */

import React from "react";
import Head from "next/head";
import Navbar from './Navbar'
import SimpleMap from './Map'


class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css"/>
          <title>Tokyo Monthly</title>
        </Head>
        <Navbar/>
        <div className="container">
        {children}
        </div>
        <SimpleMap></SimpleMap>
      </div>
    );
  }
}

export default Layout