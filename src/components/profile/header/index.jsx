import React, { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon, DotsMenu } from "../../../../assets/icons";
import LogoSvg from "../../../../assets/logos/logo";
import { IconContainer, Title, Wrapper, Icon } from "./styles";
import Dropdown from "./menu";
import { useScroll } from "../../../hooks";

const Header = ({ title, isBackIcon }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { scrollDown } = useScroll();

  const handleBack = () => {
    router.back();
  };

  return (
    <Wrapper scrollDown={scrollDown}>
      {menuOpen && <Dropdown setMenuOpen={setMenuOpen} />}
      {isBackIcon && (
        <IconContainer>
          <Icon onClick={handleBack}>
            <ArrowLeftIcon />
          </Icon>
          <Icon>
            <LogoSvg />
          </Icon>
        </IconContainer>
      )}
      {!isBackIcon && <LogoSvg />}
      <Title isBackIcon={isBackIcon}>{title}</Title>
      <DotsMenu setMenuOpen={setMenuOpen} />
    </Wrapper>
  );
};

export default Header;
