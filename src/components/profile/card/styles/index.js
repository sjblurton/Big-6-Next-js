import styled from "styled-components";

export const Wrapper = styled.article`
  position: relative;
  background: ${(props) => props.theme.color.bgLight};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  width: clamp(275px, 95%, 335px);
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  &:last-of-type {
    margin-bottom: 66px;
  }
`;

export const Title = styled.h3`
  ${(props) => props.theme.text.h3}
`;

export const SmallText = styled.p`
  ${(props) => props.theme.text.small}
  color: ${(props) => props.theme.color.accent};
  z-index: 1;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;
  z-index: 1;
`;

export const SvgContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  right: 120px;
  z-index: 0;
  & svg {
    width: 100%;
    height: 100%;
  }
`;
