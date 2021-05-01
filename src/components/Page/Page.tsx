import React, { ReactNode } from "react";

import { PageContainer } from "./Page.style";

interface Props {
  children: ReactNode;
}

export default function Page({ children }: Props) {
  return <PageContainer>{children}</PageContainer>;
}
