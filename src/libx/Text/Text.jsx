import React from "react";

export function Text({ paragraph = false, color, selectable = true, ...others }) {
  const style = {
    color,
    userSelect: selectable ? "auto" : "none",
  };

  return paragraph ? <p style={style} {...others} /> : <span style={style} {...others} />;
}
