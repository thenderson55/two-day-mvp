import Head from 'next/head'
import React from "react";
import App, { Container } from "next/app";


export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  
  render() {
    const { Component, pageProps } = this.props
    return ( 
      <>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css"/>
          <title>Tokyo Monthly</title>
        </Head>
        <Container>
           <Component {...pageProps} />        
        </Container>
      </>
      
    )
  }
}
