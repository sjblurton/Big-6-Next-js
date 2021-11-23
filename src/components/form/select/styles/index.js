import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & select {
    display: inline-block;
    padding: 6px 12px;
    font-size: 1rem;
    line-height: 1.4;
    color: #333;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 6px;
    margin-right: 6px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  text-transform: capitalize;
`;
