import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import {Navbar, Exchanges, Homepage,Cryptocurrencies,CryptoDetails, News} from  './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route path="/crypto/:coinId" element={<CryptoDetails/>}/> 
            </Routes>
          </div>
        </Layout>     
      
        <div className="footer">
          <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
            Cryptoverse <br/>
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to ="/">Home</Link>
          </Space>
        </div>  
      </div>
    </div>
  );
}


export default App;
