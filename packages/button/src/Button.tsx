import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  type: "btn";
}
export function Button(props: ButtonProps) {
  return <button className={props.type}>{props.children}</button>;
}

Button.displayName = "Button";