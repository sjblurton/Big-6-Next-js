import styled from "styled-components";

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin-inline: auto;
  gap: 16px;
  margin-top: 105px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const Title = styled.h1`
  ${(props) => props.theme.text.h2}
`;

export const Subtitle = styled.h2`
  ${(props) => props.theme.text.h3}
`;

export const LevelBall = styled.div`
  ${(props) => props.theme.text.button}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) => props.theme.color.linear};
  box-shadow: 2.2px 2.2px 2.2px 2.2px rgba(14, 14, 44, 0.15);
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
