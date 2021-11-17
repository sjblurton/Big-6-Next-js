import React from "react";
import { useAuth } from "../../../../hooks";
import { useRouter } from "next/router";
import { Wrapper, Menu } from "./styles";

const Dropdown = ({ setMenuOpen }) => {
  const router = useRouter();
  const { logout, user } = useAuth();
  const handleLogout = (e) => {
    e.stopPropagation();
    setMenuOpen(false);
    logout();
    router.push("/");
  };

  return (
    <Wrapper onClick={() => setMenuOpen(false)} name="wrapper">
      <Menu>
        <ul>
          {!user && <li onClick={() => router.push("/")}>Home</li>}
          {user && (
            <>
              <li onClick={() => router.push("/profile")}>Profile</li>
              <li onClick={() => router.push("/history")}>History</li>
              <li onClick={() => router.push("/routines")}>Routine</li>
            </>
          )}
          <li onClick={() => router.push("/timer")}>Timer</li>
          <li onClick={() => router.push(`/directions`)}>Manual</li>
          {user && <li onClick={handleLogout}>Logout</li>}
          {!user && <li onClick={() => router.push("/")}>Log in</li>}
        </ul>
      </Menu>
    </Wrapper>
  );
};

export default Dropdown;
