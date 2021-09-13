import React from "react";
import { Button, ErrorText, Icon, Text, Wrapper } from "./styles";
import GoogleLogo from "../../../assets/logos/googleLogo";

const GoogleLogin = ({ auth, ...restProps }) => {
  const { loginWithGoogle, error } = auth;
  return (
    <Wrapper>
      <Button {...restProps} onClick={loginWithGoogle}>
        <Icon>
          <GoogleLogo />
        </Icon>
        <Text>Google login</Text>
      </Button>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};

export default GoogleLogin;
