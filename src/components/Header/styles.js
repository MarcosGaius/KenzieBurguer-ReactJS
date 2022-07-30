import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: rgb(var(--grey-0));
  height: fit-content;
  padding: 1.2rem 1rem;

  @media screen and (min-width: 875px) {
    flex-direction: row;
    height: 80px;
    padding: 0 5rem;
  }
`;
