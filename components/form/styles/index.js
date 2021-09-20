import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  ${(props) => props.theme.text.h2}
`;
export const RadioButtons = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  height: 80vh;
`;

export const CustomBtn = styled.label`
  & input {
    display: none;
    &:checked {
      & ~ span {
        box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);

        & svg {
          transform: scale(1.1);
        }
      }
    }
    &:checked {
      & ~ span {
        box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
      }
    }
  }
`;

export const RadioBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  text-align: center;
  background-color: ${(props) => props.theme.color.bgLight};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  & svg {
    width: auto;
    height: auto;
    max-height: 80px;
    max-width: 80px;
    transform: scale(0.8);
    transition: 200ms;
  }
`;

export const LevelRadioBtn = styled(RadioBtn)`
  width: 80px;
  height: 80px;
`;

export const Label = styled.label``
