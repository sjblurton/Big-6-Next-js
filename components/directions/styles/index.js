import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  height: clamp(200px, 40vh, 300px);
  justify-content: space-around;
`;

export const Title = styled.h1`
  ${(props) => props.theme.text.h2}
  text-align: center;
`;

export const SubTitle = styled.h2`
  ${(props) => props.theme.text.h3}
  text-align: center;
`;

export const ProgressionText = styled.div`
  width: 80%;
  margin-inline: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: clamp(200px, 80%, 300px);
  margin-inline: auto;
`;

export const Button = styled.button`
  height: 32px;
  background: none;
  border: none;
  & svg {
    width: 100%;
    height: 100%;
  }
`;
