import styled from "styled-components";

//TODO: Import theme of button
export const SButton = styled.button`
  cursor: pointer;
  height: 43px;
  text-align: center;

  ${(props) => (props.disabled ? `opacity: 0.5;` : "")}
  ${(props) =>
    props.filled
      ? `
      background: transparent;
      border: 1px solid #00DCB7;
      color: #00DCB7;`
      : `
      background: #00DCB7;
      border: 0;
      color: #ffffff;`}
`;
