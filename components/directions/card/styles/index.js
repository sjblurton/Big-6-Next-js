import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  width: clamp(260px, 80%, 400px);
  height: 100%;
  margin-inline: auto;
  margin-block: 8px;
  background: ${(props) => props.theme.color.bgLight};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const Title = styled.h3`
  ${(props) => props.theme.text.h3}
`;

export const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const Text = styled.p`
  padding: 8px;
  max-width: 300px;
  margin-inline: auto;
`;
