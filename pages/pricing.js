import React from "react";
import Head from "next/head";
import { Header, Footer } from "../components";
import "../styles/sass/style.scss";
import 'antd/dist/antd.css';

import PricingContent from "../containers/PricingContent";

const Pricing = () => (
  <div>
    <Head>
      <title>Pricing</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
    </Head>
    <Header />
    <div className="page-container">
      <PricingContent />
      <Footer />
    </div>
  </div>
);

export default Pricing;
