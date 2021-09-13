import React from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "../../../assets/icons";
import DotsMenu from "../../../assets/icons/dotsMenu";
import LogoSvg from "../../../assets/logos/logo";
import { IconContainer, Title, Wrapper, WorkoutSvg } from "./styles";

const Header = ({ title, isBackIcon, svg }) => {
  const router = useRouter();
  return (
    <Wrapper>
      {isBackIcon && (
        <IconContainer onClick={() => router.back()}>
          <ArrowLeftIcon />
          <LogoSvg />
        </IconContainer>
      )}
      {!isBackIcon && <LogoSvg />}
      <Title isBackIcon={isBackIcon}>{title}</Title>
      {svg && <WorkoutSvg>{svg}</WorkoutSvg>}
      <DotsMenu />
    </Wrapper>
  );
};

export default Header;
