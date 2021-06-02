import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

function CardItem(props) {
  return (
    <Link
      to={props.data.url}
      style={{ display: 'inline-block', textAlign: 'center' }}
    >
      <Card
        hoverable
        style={{ width: '350px' }}
        cover={<img src={props.data.image} alt='#' />}
      >
        <Meta title={props.data.title} description={props.data.description} />
      </Card>
    </Link>
  );
}

export default CardItem;
