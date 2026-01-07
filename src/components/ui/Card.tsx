"use client";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return <div className={`ui-card ${className ?? ""}`}>{children}</div>;
}
