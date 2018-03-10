import React from 'react';
import { TileContainer, Header, Text } from '../../style/tiles-style';

export default (props) => {
  return (
    <TileContainer backgroundColor={props.backgroundColor}>
      <Header>{props.header}</Header>
      <Text>{props.text}</Text>
    </TileContainer>
  );
}