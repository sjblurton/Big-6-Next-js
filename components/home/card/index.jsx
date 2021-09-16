import React from "react";
import Link from "next/link";
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
        <Link href={`/directions?workout=${title}&level=0`}>
          <Title>{title}</Title>
        </Link>

        <Description>{description}</Description>
        <List>
          {level.map((item, i) => (
            <Link key={i} href={`/directions?workout=${title}&level=${i}`}>
              <ListItem workout={title}>{item}</ListItem>
            </Link>
          ))}
        </List>
      </Content>
    </Wrapper>
  );
};

export default Card;
