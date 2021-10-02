import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  padding: 16px;
  max-width: 800px;
  min-height: 100vh;
  justify-content: space-evenly;
`;
export const Content = styled.article`
  display: flex;
  flex: 60%;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ImageContainer = styled.div`
  flex: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 16px;
  & svg {
    width: 100%;
    height: auto;
    border-radius: 16px;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
export const Title = styled.h1`
  margin-bottom: 16px;
  ${(props) => props.theme.text.h1}
  @media (max-width: 360px) {
    ${(props) => props.theme.text.h2}
  }
`;
export const Subtile = styled.h2`
  margin-bottom: 16px;
  ${(props) => props.theme.text.h2}
  @media (max-width: 360px) {
    ${(props) => props.theme.text.h3}
  }
`;
export const Description = styled.p`
  max-width: 600px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.color.accent};
  ${(props) => props.theme.text.body};
`;
export const List = styled.ul`
  ${(props) => props.theme.text.body}
  margin-bottom: 8px;
  list-style-type: none;
  color: ${(props) => props.theme.color.accent};
`;
export const ListItem = styled.li`
  ${(props) => props.theme.text.button}
  padding: 16px;
  color: #f5af19;
  cursor: pointer;
`;
export const Signup = styled.p`
  margin-bottom: 4px;
  ${(props) => props.theme.text.small}
`;
