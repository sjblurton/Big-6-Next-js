import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.color.bgLight};
  display: flex;
  justify-content: center;
`;
export const Separator = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.color.accent};
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 8px;
`;

export const IconContainer = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddIconContainer = styled.div`
  margin: 6px;
  width: 60px;
  height: 60px;
  background: ${(props) => props.theme.color.linear};
  border-radius: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
