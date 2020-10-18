import React from "react";
import styles from "./View.module.css";

export function View({ fullScreen = false, className = null, ...others }) {
  const isFullScreen = fullScreen && styles.ViewFullScreen
  const classNames = className ? `${isFullScreen} ${className}` : isFullScreen;

  return <div className={classNames} {...others} />;
}
