import React from "react";
import {
  Description,
  List,
  ListItem,
  ImageContainer,
  Title,
  Wrapper,
  Content,
} from "./styles";

const Card = ({ data, ...restProps }) => {
  const { image, title, description, level } = data;
  return (
    <Wrapper {...restProps}>
      <ImageContainer>{image}</ImageContainer>

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <List>
          {level.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </List>
      </Content>
    </Wrapper>
  );
};

export default Card;
