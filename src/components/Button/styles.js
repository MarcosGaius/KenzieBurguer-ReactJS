import styled from "styled-components";

export const Button = styled.button`
  width: 6.5rem;
  height: ${(props) => (props.btnSize === "default" ? "2.5rem" : "2rem")};
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s;
  ${(props) =>
    props.btnType === "default"
      ? `
          background-color: rgb(var(--color-primary));
          color: #ffffff;
          &:hover {
            background-color: rgb(var(--color-primary-50));
          }
        `
      : `
        background-color: rgb(var(--grey-20));
        color: rgb(var(--grey-50));
        &:hover {
          background-color: rgb(var(--grey-50));
          color: rgb(var(--grey-20));
        }
      `};
`;
