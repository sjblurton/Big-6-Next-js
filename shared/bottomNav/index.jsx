import React from "react";
import Link from "next/link";
import {
  AddIcon,
  CalendarIcon,
  ClipboardIcon,
  HomeIcon,
  WatchIcon,
} from "../../assets/icons";
import {
  AddIconContainer,
  ButtonContainer,
  IconContainer,
  Separator,
  Wrapper,
} from "./styles";

const BottomTabs = ({ isPage, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <Separator />
      <ButtonContainer>
        <Link href="/">
          <IconContainer>
            <HomeIcon isPage={isPage} />
          </IconContainer>
        </Link>
        <IconContainer>
          <ClipboardIcon isPage={isPage} />
        </IconContainer>
        <AddIconContainer>
          <AddIcon isPage={isPage} />
        </AddIconContainer>
        <IconContainer>
          <CalendarIcon isPage={isPage} />
        </IconContainer>
        <Link href="/timer">
          <IconContainer>
            <WatchIcon isPage={isPage} />
          </IconContainer>
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
};

export default BottomTabs;
