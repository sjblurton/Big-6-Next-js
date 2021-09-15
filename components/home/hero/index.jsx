import React from "react";
import {
  Content,
  Description,
  List,
  ListItem,
  Subtile,
  Title,
  Wrapper,
  ImageContainer,
} from "./styles";
import LogoSvg from "../../../assets/logos/logo";
import GoogleLogin from "../loginButton";

const Hero = ({ auth }) => {
  const renderList = () => {
    const workouts = [
      "Push Ups",
      "Pull Ups",
      "Handstand Push Ups",
      "Squats",
      "Leg Raises",
      "Bridges",
    ];
    return workouts.map((workout, i) => <ListItem key={i}>{workout}</ListItem>);
  };

  return (
    <Wrapper>
      <Content>
        <Title>Big Six Calisthenics</Title>
        <Subtile>Calisthenics Training Log Book App.</Subtile>
        <Description>
          Big six calisthenics is a log book application deigned to the
          principles of the Convict Conditioning book. If you are using Convict
          Conditioning and wanted a digital log book to track your progress,
          here it is. If you've never heard of convict conditioning then i would
          highly recommend the book to get the most out of this log book app.
          It’s free to use, and focuses on the six calisthenics skills of:
        </Description>
        <List>{renderList()}</List>
        {auth && <GoogleLogin auth={auth} />}
      </Content>
      <ImageContainer>
        <LogoSvg />
      </ImageContainer>
    </Wrapper>
  );
};

export default Hero;
