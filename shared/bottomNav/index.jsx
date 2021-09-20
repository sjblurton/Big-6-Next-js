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
        <Link href="/history">
          <IconContainer>
            <ClipboardIcon isPage={isPage} />
          </IconContainer>
        </Link>
        <AddIconContainer>
          <AddIcon isPage={isPage} />
        </AddIconContainer>
        <Link href="/routines">
          <IconContainer>
            <CalendarIcon isPage={isPage} />
          </IconContainer>
        </Link>
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
