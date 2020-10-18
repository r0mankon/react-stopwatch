import React from "react";
import { Button } from "../libx";

export default function Buttons({ isTimerOn, timerCurrentTime, handlers: handle, timerString }) {
  return (
    <>
      {!isTimerOn && timerCurrentTime === 0 && <Button onClick={handle.start} label="Start" />}

      {isTimerOn && timerCurrentTime > 0 && (
        <Button type="Secondary" onClick={handle.stop} label="Stop" />
      )}

      {!isTimerOn && timerCurrentTime > 0 && <Button onClick={handle.start} label="Start" />}

      {isTimerOn && <Button data-timerstring={timerString} onClick={handle.lap} label="Lap" />}

      {!isTimerOn && timerCurrentTime > 0 && (
        <Button type="Danger" onClick={handle.reset} label="Reset" />
      )}
    </>
  );
}
