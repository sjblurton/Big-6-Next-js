import styled, { css } from "styled-components";

const autoHide = css`
  visibility: hidden;
  transition: all 0.5s;
  transform: translateY(-100%);
`;
const autoShow = css`
  visibility: visible;
  transition: all 0.5s;
`;

export const Wrapper = styled.div`
  ${(props) => (props.scrollDown ? autoHide : autoShow)}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.color.bgLight};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px 0;
  z-index: 101;
`;
export const Title = styled.h1`
  ${(props) => props.theme.text.h1}
  z-index: 2;
  align-self: ${(props) => (props?.isBackIcon ? "flex-start" : "center")};
`;
export const IconContainer = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  & svg {
    &:first-of-type {
      width: auto;
      height: 40px;
      margin-bottom: 8px;
    }
    &:last-of-type {
      width: 60px;
      height: 60px;
    }
  }
`;

export const Icon = styled.div`
  width: 100%;
  cursor: pointer;
`;
