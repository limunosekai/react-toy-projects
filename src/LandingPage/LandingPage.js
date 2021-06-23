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
      'https://res.cloudinary.com/limu/image/upload/v1623223834/portfolio/slider_pm0bmo.png',
    url: '/slider',
  },
  {
    title: 'Lorem Ipsum',
    description: 'Lorem App - Generate Lorem Ipsum',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1623223834/portfolio/lorem_bhwsi4.png',
    url: '/lorem',
  },
  {
    title: 'Color Generator',
    description: 'Color App - Generate Color',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1623223834/portfolio/color_fv2tax.png',
    url: '/color',
  },
  {
    title: 'Grocery Bud',
    description: 'Grocery bud App',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1623313147/portfolio/grocery_c2a5bi.png',
    url: '/grocery',
  },
  {
    title: 'Sidebar / Modal',
    description: 'Sidebar/Modal App - Context API',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1623320474/portfolio/sidebar_er45zx.png',
    url: '/sidebar',
  },
  {
    title: 'Stripe',
    description: 'Stripe Simple App - Context API',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1623395295/portfolio/stripe_qksha9.png',
    url: '/stripe',
  },
  {
    title: 'Cart',
    description: 'Simple Cart App - Context API',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1623401979/portfolio/cart_rzgm0x.png',
    url: '/cart',
  },
  {
    title: 'Markdown-Preview',
    description: 'Markdown-Preview App - react-markdown',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1624272572/portfolio/markdown_zxbtom.png',
    url: '/markdown',
  },
  {
    title: 'Random-User',
    description: 'Random-User App - random user API',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1624272573/portfolio/random_qrk0qi.png',
    url: '/random-user',
  },
  {
    title: 'Pagination',
    description: 'Simple Pagination App - github API',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1624272573/portfolio/pagination_vbhsh3.png',
    url: '/pagination',
  },
  {
    title: 'Dark Mode',
    description: 'Dark Mode App',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1624346227/portfolio/dark_l5msvo.png',
    url: '/dark',
  },
  {
    title: 'Hacker News',
    description: 'Hacker News App - Context API',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1624346227/portfolio/hacker_ue25nw.png',
    url: '/hacker',
  },
  {
    title: 'Quiz',
    description: 'Simple Quiz App - Context API, Open Trivia API',
    image:
      'https://res.cloudinary.com/limu/image/upload/v1624428744/portfolio/quiz_rb2z18.png',
    url: '/quiz',
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
