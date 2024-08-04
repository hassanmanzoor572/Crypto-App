import React from "react";
import { Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, Divider } from 'antd';
import Navbar1 from "./components/Navbar1";

import Homepage from "./components/HomePage";
import Cryptocurrencies from "./components/CryptoCurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import Exchange from "./components/Exchange";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar1 />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/exchanges" element={<Exchange />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />

            </Routes>
          </div>
        </Layout>



        <div className="footer">
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            Copyright © 2024 <Link to="/">Cryptoverse</Link>. All Rights Reserved.
          </Typography.Title>

          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>

    </div>
  );
}

export default App;
