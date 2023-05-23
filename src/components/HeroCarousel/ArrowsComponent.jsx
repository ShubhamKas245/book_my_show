import React from "react";

export function NextArrow({ className, onClick, style }) {
  return (
    <>
      <div className={className} onClick={onClick} style={{ ...style }} />
    </>
  );
}

export function PrevArrow({ className, onClick, style }) {
  return (
    <>
      <div className={className} onClick={onClick} style={{ ...style }} />
    </>
  );
}
