import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/CryptoAPI';
import millify from 'millify';

const { Title } = Typography;

const HomePage = () => {
  const { data, error, isLoading } = useGetCryptosQuery();

  console.log('Data:', data); // Log to see the data structure
  console.log('Error:', error); // Log to see if there are any errors
  console.log('isLoading:', isLoading); // Log to see the loading status

  if (isLoading) return 'Loading...'; // Show loading indicator while fetching
  if (error) return `Error: ${error.message}`; // Handle any fetch errors

  // Assuming data structure includes a 'stats' property
  const globalStats = data?.data?.stats;

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.totalCoins} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={globalStats?.totalExchanges} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={globalStats?.totalMarkets} /></Col>
      </Row>
    </>
  );
};

export default HomePage;
