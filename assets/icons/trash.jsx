import React from "react";

function TrashIcon({ setOpenModal }) {
  return (
    <Container onClick={() => setOpenModal(true)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6"
        ></path>
      </svg>
    </Container>
  );
}

export default TrashIcon;

import styled from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.color.linear};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
