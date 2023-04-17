import styled from 'styled-components';

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const FooterBase = styled.footer`
  background: var(--grayMedium);
  border-top: 2px solid var(--black);
  padding: 10px;
  color: var(--black);
  text-align: center;
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
