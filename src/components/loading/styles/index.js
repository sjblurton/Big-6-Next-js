import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.color.bgDark};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  flex-direction: column;
`;
