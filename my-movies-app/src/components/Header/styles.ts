import styled from "styled-components";

export const HeaderBase = styled.header`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--white);
  border-bottom: 2px solid var(--black);
`;
