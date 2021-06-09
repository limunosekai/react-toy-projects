import React from 'react';
import { Row, Col } from 'antd';
import CardItem from './CardItem/CardItem';

const cardData = [
  {
    title: 'Birthday-Reminder',
    description: 'Birthday Reminder App',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1622968145/portfolio/birth_uhjsg8.png',
    url: '/birth',
  },
  {
    title: 'Tours',
    description: 'Tours',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1622968145/portfolio/tour_spr91y.png',
    url: '/tours',
  },
  {
    title: 'Reviews',
    description: 'Review App',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1622968145/portfolio/review_cy7zvt.png',
    url: '/reviews',
  },
  {
    title: 'Accordion',
    description: 'Accordion App',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1622968145/portfolio/accordion_cxvsie.png',
    url: '/accordion',
  },
  {
    title: 'Menu',
    description: 'Menu App',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1622968145/portfolio/menu_liouho.png',
    url: '/menu',
  },
  {
    title: 'Tabs',
    description: 'Tabs App',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1622968145/portfolio/tabs_l1j5qu.png',
    url: '/tabs',
  },
  {
    title: 'StockPhotos',
    description: 'StockPhotos App - Infinite Scroll',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1622968531/portfolio/stock_t98cml.png',
    url: '/stock-photos',
  },
  {
    title: 'Slider',
    description: 'Slider App - Infinite Scroll',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1622968531/portfolio/stock_t98cml.png',
    url: '/slider',
  },
  {
    title: 'Lorem Ipsum',
    description: 'Lorem App - Generate Lorem Ipsum',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1622968531/portfolio/stock_t98cml.png',
    url: '/lorem',
  },
];

function LandingPage() {
  const renderCards = cardData.map((card, i) => {
    return (
      <Col lg={6} md={12} xs={24} key={i}>
        <CardItem data={card} />
      </Col>
    );
  });

  return (
    <div style={{ width: '80%', margin: '4rem auto' }}>
      <Row gutter={[16, 32]} justify='center'>
        {renderCards}
      </Row>
    </div>
  );
}

export default LandingPage;
