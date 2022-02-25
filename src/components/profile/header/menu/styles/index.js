import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background: #000000b3;
  z-index: 98;
`;

export const Menu = styled.div`
<<<<<<< HEAD
	position: fixed;
	z-index: 99;
	right: 10%;
	top: 90px;
	width: 200px;
	height: fit-content;
	background-color: ${(props) => props.theme.color.accent};
	color: black;
	border-radius: 8px;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	& ul {
		list-style-type: none;
		padding: 16px;
		height: 100%;
=======
  position: fixed;
  z-index: 99;
  right: 10%;
  top: 90px;
  width: 200px;
  height: fit-content;
  background-color: ${(props) => props.theme.color.accent};
  color: black;
  border-radius: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  & ul {
    list-style-type: none;
    padding: 16px;
    height: 100%;
>>>>>>> 0857ea77f724915dbd4fa4d09c0d7956c23ed1d2

    & li {
      ${(props) => props.theme.text.button}
      cursor: pointer;
      padding: 16px 8px;
      &:last-of-type {
        position: relative;
        margin-top: 16px;
        &:before {
          content: "";
          position: absolute;
          top: 0;
          height: 3px;
          width: 90%;
          background-color: #ccc;
        }
      }
    }
  }
`;
