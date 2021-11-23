import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  border: none;
  background: ${(props) => props.theme.color.orange};
  width: 100%;
  display: block;
  padding-block: 8px;
  border-radius: 8px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.white};
  margin-inline: auto;
  margin-block: 8px;
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
export const Reset = styled(Button)`
  background-color: ${(props) => props.theme.color.error};
`;
