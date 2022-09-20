import * as React from "react";

export interface CtaProps {
  children: React.ReactNode;
  type: "btn";
}
export function Cta(props: CtaProps) {
  return <button className={props.type}>{props.children}</button>;
}
Cta.displayName = "Cta";
