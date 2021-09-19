import React from "react";
import { Wrapper, Title, Text, SVGContainer } from "./styles";

const Card = ({ title, image, instruction }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SVGContainer>{image}</SVGContainer>
      <Text>{instruction}</Text>
    </Wrapper>
  );
};

export default Card;
