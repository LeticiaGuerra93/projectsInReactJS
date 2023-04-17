import React, { ReactNode } from "react";

import { AppWrapper, Main } from "./style";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children?: ReactNode;
}

function LayoutDefault({ children }: Props) {
  return (
    <AppWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </AppWrapper>
  );
}

export default LayoutDefault;
