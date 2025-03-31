import React, { ReactNode } from "react";

export default function rootLayout({ children }: { children: ReactNode }) {
  return (<div>{children}</div>)
}
