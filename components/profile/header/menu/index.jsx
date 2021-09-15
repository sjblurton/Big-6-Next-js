import React from "react";
import useAuth from "../../../../src/hooks/auth";
import { useRouter } from "next/router";
import { Wrapper, Menu } from "./styles";

const Dropdown = ({ setMenuOpen }) => {
  const router = useRouter();
  const { logout } = useAuth();

  const stopBubble = (e) => {
    e.stopPropagation();
  };
  return (
    <Wrapper onClick={() => setMenuOpen(false)} name="wrapper">
      <Menu onClick={stopBubble}>
        <ul>
          <li onClick={() => router.push("/profile")}>Profile</li>
          <li>History</li>
          <li>Routine</li>
          <li>Timer</li>
          <li onClick={() => logout()}>Logout</li>
        </ul>
      </Menu>
    </Wrapper>
  );
};

export default Dropdown;
