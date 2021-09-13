import React from "react";
import { Wrapper } from "./styles";

const Button = ({ children, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <Button>{children}</Button>
    </Wrapper>
  );
};

export default Button;
