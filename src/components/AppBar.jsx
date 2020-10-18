import React from "react";
import { View } from "../libx";
import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <View className={styles.AppBar}>
      <h1 className={styles.Title}>Stopwatch</h1>
    </View>
  );
}
