import styled from "styled-components";

export const Wrapper = styled.div`
  text-decoration: none;
  padding: 8px;
  background: ${(props) => props.theme.color.linear};
  box-shadow: "0px 6px 2px -4px rgba(14, 14, 44, 0.1), inset 0px -1px 0px rgba(14, 14, 44, 0.4)";
  border-radius: 8px;
  ${(props) => props.theme.text.button};
  transition: all 250ms ease-in;
  color: ${(props) => props.theme.color.white};

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.9;
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
export const Button = styled.button``