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
    title: 'Birthday-Reminder',
    description: 'Birthday Reminder App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/birth',
  },
  {
    title: 'Birthday-Reminder',
    description: 'Birthday Reminder App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/birth',
  },
  {
    title: 'Birthday-Reminder',
    description: 'Birthday Reminder App',
    image:
      'https://cdnweb01.wikitree.co.kr/webdata/editor/202008/05/img_20200805154432_95293cd6.webp',
    url: '/birth',
  },
];

function LandingPage() {
  const renderCards = cardData.map((card, i) => {
    return (
      <Col lg={6} md={12} xs={24}>
        <CardItem data={card} key={i} />
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
