import * as React from "react";

export interface TextProps {
  children: React.ReactNode;
  type: "awesome-text";
}
export function Text(props: TextProps) {
  return <h1 className={props.type}>{props.children}</h1>;
}

Text.displayName = "Text";