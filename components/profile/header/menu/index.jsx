import React from "react";
import useAuth from "../../../../src/hooks/auth";
import { useRouter } from "next/router";
import { Wrapper, Menu } from "./styles";

const Dropdown = ({ setMenuOpen }) => {
  const router = useRouter();
  const { logout, user } = useAuth();

  const stopBubble = (e) => {
    e.stopPropagation();
  };
  return (
    <Wrapper onClick={() => setMenuOpen(false)} name="wrapper">
      <Menu onClick={stopBubble}>
        <ul>
          {!user && <li onClick={() => router.push("/")}>Home</li>}
          {user && (
            <>
              <li onClick={() => router.push("/profile")}>Profile</li>
              <li>History</li>
              <li>Routine</li>
            </>
          )}
          <li>Timer</li>
          {user && <li onClick={() => logout()}>Logout</li>}
          {!user && <li onClick={() => router.push("/")}>Log in</li>}
        </ul>
      </Menu>
    </Wrapper>
  );
};

export default Dropdown;
