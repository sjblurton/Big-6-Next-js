import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.color.bgLight};
  width: 90%;
  margin: 0 auto;
  padding: 8px;
  max-width: 600px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 105px;
`;
