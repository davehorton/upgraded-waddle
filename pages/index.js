import React from "react";
import Head from "next/head";
import { Header, Footer } from "../components";
import "../styles/sass/style.scss";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Footer />
  </div>
);

export default Home;
