import React from "react";

import { Container, Header, Content } from './style';

function Card(props) {
  return (
    <Container>
      <Header color={props.color}>{props.name}</Header>
      <Content>{props.children}</Content>
    </Container>
  );
}

export default Card;
