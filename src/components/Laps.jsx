import React from "react";
import { Text, View } from "../libx";
import styles from "./Laps.module.css";

export default function Laps(props) {
  return (
    <View className={styles.laps}>
      {props.laps &&
        props.laps.map((lap, index) => (
          <Text paragraph selectable={false} className={styles.lapItem} key={lap}>
            <span>Lap {index}</span>
            {lap}
            <span></span>
          </Text>
        ))}
    </View>
  );
}
