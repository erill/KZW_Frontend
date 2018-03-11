import React from 'react';
import { Container, Header, Text } from '../../style/text-header-styles';

export default (props) => {
  return (
    <Container>
      <Header>{props.header}</Header>
      <Text>{props.text}</Text>
    </Container>
  );
}