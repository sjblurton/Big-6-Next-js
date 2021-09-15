import React, { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "../../../assets/icons";
import DotsMenu from "../../../assets/icons/dotsMenu";
import LogoSvg from "../../../assets/logos/logo";
import { IconContainer, Title, Wrapper, WorkoutSvg } from "./styles";
import Dropdown from "./menu";

const Header = ({ title, isBackIcon, svg }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <Wrapper>
      {menuOpen && <Dropdown setMenuOpen={setMenuOpen} />}
      {isBackIcon && (
        <IconContainer onClick={() => router.back()}>
          <ArrowLeftIcon />
          <LogoSvg />
        </IconContainer>
      )}
      {!isBackIcon && <LogoSvg />}
      <Title isBackIcon={isBackIcon}>{title}</Title>
      {svg && <WorkoutSvg>{svg}</WorkoutSvg>}
      <DotsMenu setMenuOpen={setMenuOpen} />
    </Wrapper>
  );
};

export default Header;
