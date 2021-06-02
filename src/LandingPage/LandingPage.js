import React from 'react';
import { Row, Col } from 'antd';
import CardItem from './CardItem/CardItem';

const cardData = [
  {
    title: 'Birthday-Reminder',
    description: 'Birthday Reminder App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/birth',
  },
  {
    title: 'Tours',
    description: 'Tours',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/tours',
  },
  {
    title: 'Reviews',
    description: 'Review App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/reviews',
  },
  {
    title: 'Accordion',
    description: 'Accordion App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/accordion',
  },
  {
    title: 'Menu',
    description: 'Menu App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/menu',
  },
  {
    title: 'Accordion',
    description: 'Accordion App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/accordion',
  },
  {
    title: 'Accordion',
    description: 'Accordion App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/accordion',
  },
  {
    title: 'Accordion',
    description: 'Accordion App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/accordion',
  },
  {
    title: 'Accordion',
    description: 'Accordion App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/accordion',
  },
  {
    title: 'Accordion',
    description: 'Accordion App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/accordion',
  },
  {
    title: 'Accordion',
    description: 'Accordion App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/accordion',
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
