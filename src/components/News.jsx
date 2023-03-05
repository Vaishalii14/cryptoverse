
import React,{useState} from 'react'
import { Select,Typography,Row,Col,Avatar,Card} from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import moment from 'moment';
const {Text,Title}=Typography;
const {option}=Select;

const News = ({simplified}) => {
   //const count=simplified?5:10;
  
  // const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory:'Cryptocurrency'});
  console.log(cryptoNews);
  return (
    <Row gutter={[24,24]}>
      {cryptoNews.value.map((news,i)=> (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                {/* <img src={news?.image?.thumbnail?.contentUrl}/> */}
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News


// import React from "react";
// const News = () => {
//   return (
//     <div>News</div>
//   )
// }

// export default News