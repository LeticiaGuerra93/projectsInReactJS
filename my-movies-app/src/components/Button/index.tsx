import React, { ReactNode } from "react";
import { ButtonBase } from "./styles";

interface Props {
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ children, type, onClick }: Props) {
  return (
    <ButtonBase type={type} onClick={onClick}>
      {children}
    </ButtonBase>
  );
}
export default Button;