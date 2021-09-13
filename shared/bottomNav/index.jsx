import React from "react";
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
        <IconContainer>
          <HomeIcon isPage={isPage} />
        </IconContainer>
        <IconContainer>
          <ClipboardIcon isPage={isPage} />
        </IconContainer>
        <AddIconContainer>
          <AddIcon isPage={isPage} />
        </AddIconContainer>
        <IconContainer>
          <CalendarIcon isPage={isPage} />
        </IconContainer>
        <IconContainer>
          <WatchIcon isPage={isPage} />
        </IconContainer>
      </ButtonContainer>
    </Wrapper>
  );
};

export default BottomTabs;
