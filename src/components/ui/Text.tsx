import React from "react";

type TextProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Text({
  as: Component = "p",
  className,
  children,
}: TextProps) {
  return <Component className={className}>{children}</Component>;
}
