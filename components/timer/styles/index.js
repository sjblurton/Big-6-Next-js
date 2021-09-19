import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  height: calc(100vh - 200px);
  justify-content: center;
  align-items: center;
  margin-bottom: 72px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;
export const Clock = styled.h1`
  ${(props) => props.theme.text.h1}
  & span {
    ${(props) => props.theme.text.bold}
  }
`;
export const Go = styled.button`
  ${(props) => props.theme.text.h1}
  width: 180px;
  height: 180px;
  background-color: ${(props) => (props.isRunning ? "#f4442e" : "#22bc29")};
  border-radius: 50%;
  color: #ffffff;
`;
export const Reset = styled.button`
  ${(props) => props.theme.text.h3}
  height: 48px;
  width: 180px;
  background-color: #242834;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
`;

export const BeReadyIn = styled.h2`
  ${(props) => props.theme.text.h2}
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.bgLight};
`;
