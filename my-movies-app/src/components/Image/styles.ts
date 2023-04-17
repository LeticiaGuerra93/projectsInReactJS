import styled from "styled-components";

export const Image = styled.img`
  width: ${props => props.width || "50px"};
  height: ${props => props.height || "50px"};
  margin-left: 5px
`;
