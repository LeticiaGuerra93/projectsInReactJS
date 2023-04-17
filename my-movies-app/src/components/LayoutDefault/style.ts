import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: var(--blackLighter);
  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);
  height: 100vh;

  @media (max-width: 800px) {
    --bodyPaddingTop: 40px;
    padding-top: var(--bodyPaddingTop);
  }
`;

export const Main = styled.main`
  background-color: var(--blackLighter);
  color: var(--white);
  flex: 1;
  padding-top: 65px;
  padding-bottom: 65px;

  @media screen and (min-width: 600px) {
    padding-top: 22px;
  }
  
`;
