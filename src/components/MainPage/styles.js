import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;

  @media screen and (min-width: 875px) {
    flex-direction: row;
    padding: 1.8rem 5rem;
  }
`;
