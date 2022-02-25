import React from "react";
import Link from "next/link";

function EditIcon({ docId }) {
  return (
    <Link href={`/edit/${docId}`}>
      <Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="none"
          viewBox="0 0 42 42"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="3"
            d="M22.77 1H11C5.477 1 1 5.477 1 11v20c0 5.523 4.477 10 10 10h20c5.523 0 10-4.477 10-10V16.416"
          ></path>
          <path
            stroke="#fff"
            strokeWidth="3"
            d="M25.865 9.092l7.117 7.13-16.09 16.12-3.56-3.565-3.558-3.565 16.091-16.12z"
          ></path>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="3"
            d="M14.622 32.805l-5.436.18.181-5.445 5.255 5.265zM32.28 15.184l-5.452-5.455a2.001 2.001 0 01-.4-2.254l.531-1.151a1.999 1.999 0 013.229-.575l6.021 6.025c.953.953.71 2.558-.483 3.185l-1.102.58a1.999 1.999 0 01-2.345-.355z"
          ></path>
        </svg>
      </Container>
    </Link>
  );
}

export default EditIcon;

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
  & svg {
    width: 24px;
    height: 24px;
  }
`;
