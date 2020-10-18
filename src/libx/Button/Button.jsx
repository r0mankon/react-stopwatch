import React from "react";
import styles from "./Button.module.css";

export function Button({
  label = "Button",
  type = "Primary",
  size = "normal",
  ...others
}) {
  const sizes = {
    small: {
      fontSize: 16,
    },
    normal: {
      fontSize: 18,
    },
    large: {
      fontSize: 22,
    },
  };

  const t = `${type}Button`;

  return (
    <span
      style={sizes[size]}
      className={`${styles.Button} ${styles[t]}`}
      {...others}
    >
      {label}
    </span>
  );
}
