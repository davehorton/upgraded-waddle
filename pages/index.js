import React from "react";
import Head from "next/head";
import { Header, Footer } from "../components";
import HomeContent from "../containers/HomeContent";
import "../styles/sass/style.scss";
import 'antd/dist/antd.css';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
    </Head>
    <Header />
    <div className="page-container">
      <HomeContent />
      <Footer />
    </div>
  </div>
);

export default Home;
