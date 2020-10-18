import React, { Component } from "react";
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Laps from "./components/Laps";
import AppBar from "./components/AppBar";
import { Text, View } from "./libx";

export default class App extends Component {
  state = {
    isTimerOn: false,
    timerCurrentTime: 0,
    timerStart: 0,
    laps: [],
  };

  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.lap = this.lap.bind(this);
  }

  start() {
    this.setState({
      isTimerOn: true,
      timerCurrentTime: this.state.timerCurrentTime,
      timerStart: Date.now() - this.state.timerCurrentTime,
    });

    this.timer = setInterval(() => {
      this.setState({
        timerCurrentTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  }

  stop() {
    clearInterval(this.timer);
    this.setState({ isTimerOn: false });
  }

  reset() {
    this.setState({
      timerCurrentTime: 0,
      timerStart: 0,
      laps: [],
    });
  }

  lap(event) {
    const newLaps = [...this.state.laps];
    newLaps.unshift(event.target.dataset.timerstring);
    this.setState({ laps: newLaps });
  }

  format(time, mod = 1) {
    return ("0" + (Math.floor(time) % mod)).slice(-2);
  }

  render() {
    const { timerCurrentTime } = this.state;

    const nanoSecond = this.format(timerCurrentTime / 10, 100);
    const second = this.format(timerCurrentTime / 1000, 60);
    const minute = this.format(timerCurrentTime / 60000, 60);
    const hour = this.format(timerCurrentTime / 3600000);

    const timerString = `${hour}:${minute}:${second}:${nanoSecond}`;
    const colorize = timerString === "00:00:00:00" && "#757575";

    return (
      <View fullScreen>
        <AppBar />
        <View className={styles.TimerContainer}>
          <Text selectable={true} color={colorize} className={styles.TimerDisplay}>
            {timerString}
          </Text>
        </View>

        {this.state.laps.length !== 0 && <Laps laps={this.state.laps} />}

        <View className={styles.Buttons}>
          <Buttons
            isTimerOn={this.state.isTimerOn}
            timerCurrentTime={timerCurrentTime}
            timerString={timerString}
            handlers={{
              start: this.start,
              stop: this.stop,
              reset: this.reset,
              lap: this.lap,
            }}
          />
        </View>
      </View>
    );
  }
}
