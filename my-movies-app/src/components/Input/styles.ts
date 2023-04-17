import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: var(--white);
  background: var(--black);
  border: none;
  border-radius: 5px;
  width: ${(props) => props.width || "35%"};

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
