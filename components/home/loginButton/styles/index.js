import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Button = styled.div`
  display: inline-block;
  background: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.bgDark};
  border-radius: 5px;
  border: thin solid ${(props) => props.theme.color.bgLight};
  box-shadow: "0px 6px 2px -4px rgba(14, 14, 44, 0.1), inset 0px -1px 0px rgba(14, 14, 44, 0.4)";
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`;
export const Icon = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
  padding: 8px;
  & svg {
    width: 100%;
    height: auto;
  }
`;
export const Text = styled.span`
  ${(props) => props.theme.text.button}
  display: inline-block;
  vertical-align: middle;
  padding: 0 24px;
`;
export const ErrorText = styled.p`
  color: ${(props) => props.theme.color.error};
  ${(props) => props.theme.text.small};
`;
