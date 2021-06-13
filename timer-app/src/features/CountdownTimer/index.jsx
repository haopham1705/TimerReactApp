import React, { Component } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import Controls from "./components/Controls";
import './CountdownTimer.scss'
import { Route, Link } from 'react-router-dom'


class CountdownTimer extends Component {
    constructor() {
        super();

        this.state = {
            hours: "00",
            minutes: "00",
            seconds: "00",
            unitOfTime: null,
            canStart: null,
        };

        this.handleDisplayFocusChange = this.handleDisplayFocusChange.bind(this);
        this.handleKeyClick = this.handleKeyClick.bind(this);
        this.handleControlsStart = this.handleControlsStart.bind(this);
        this.handleControlsResume = this.handleControlsResume.bind(this);
        this.handleControlsStop = this.handleControlsStop.bind(this);
        this.handleControlsReset = this.handleControlsReset.bind(this);
        this.canStart = this.canStart.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleDisplayFocusChange(unitOfTime) {
        this.setState(() => ({ unitOfTime }));
    }

    handleKeyClick(time) {
        if (this.state.unitOfTime === "HH") {
            this.setHours(time);
        } else if (this.state.unitOfTime === "MM") {
            this.setMinutes(time);
        } else if (this.state.unitOfTime === "SS") {
            this.setSeconds(time);
        }

        this.canStart();
    }

    setHours(hours) {
        if (hours < 0) {
            this.setState(() => ({ hours: "00" }));
        } else {
            this.setState((prevState) => {
                hours = parseInt(this.formatTime(prevState.hours + hours));

                if (hours > 99) {
                    hours = prevState.hours;
                }

                return { hours: this.formatTime(hours) };
            });
        }
    }

    setMinutes(minutes) {
        if (minutes < 0) {
            this.setState(() => ({ minutes: "00" }));
        } else {
            this.setState((prevState) => {
                minutes = parseInt(this.formatTime(prevState.minutes + minutes));

                if (minutes > 59) {
                    let hours = minutes / 60;
                    minutes = minutes % 60;
                    this.setHours(hours);
                }

                return { minutes: this.formatTime(minutes) };
            });
        }
    }

    setSeconds(seconds) {
        if (seconds < 0) {
            this.setState(() => ({ seconds: "00" }));
        } else {
            this.setState((prevState) => {
                seconds = parseInt(this.formatTime(prevState.seconds + seconds));

                if (seconds > 59) {
                    let minutes = seconds / 60;
                    seconds = seconds % 60;
                    this.setMinutes(minutes);
                }

                return { seconds: this.formatTime(seconds) };
            });
        }
    }

    formatTime(time) {
        time = parseInt(time);
        return time < 10
            ? "0" + time
            : time.toString().slice(time.toString().length - 2);
    }

    canStart() {
        this.setState((prevState) => ({
            canStart:
                prevState.status !== "STARTED" &&
                (parseInt(prevState.hours) > 0 ||
                    parseInt(prevState.minutes) > 0 ||
                    parseInt(prevState.seconds) > 0),
        }));
    }

    handleControlsStart() {
        this.startTimer();
    }

    startTimer() {
        if (this.state.status !== "STARTED") {
            this.setState(() => ({ status: "STARTED" }));

            const totalMilliseconds =
                (parseInt(this.state.hours) * 60 * 60 +
                    parseInt(this.state.minutes) * 60 +
                    parseInt(this.state.seconds)) *
                1000;

            this.setState(() => ({ timeInterval: parseInt(totalMilliseconds) }));

            this.interval = setInterval(() => {
                this.setState((prevState) => ({
                    timeInterval: prevState.timeInterval - 10,
                }));

                if (this.state.timeInterval === 0) {
                    clearInterval(this.interval);
                    this.setState(() => ({ status: null }));
                }
            }, 10);
        }
    }

    handleControlsStop() {
        if (this.state.status === "STARTED") {
            clearInterval(this.interval);
            this.setState(() => ({ status: "STOPPED" }));
        }
    }

    handleControlsResume() {
        if (this.state.status === "STOPPED") {
            this.interval = setInterval(() => {
                this.setState((prevState) => ({
                    status: "STARTED",
                    timeInterval: prevState.timeInterval - 10,
                }));

                if (this.state.timeInterval === 0) {
                    clearInterval(this.interval);
                    this.setState(() => ({ status: null }));
                }
            }, 10);
        }
    }

    handleControlsReset() {
        clearInterval(this.interval);
        this.setState(() => ({ status: null, timeInterval: null }));
    }

    render() {
        return (
            <div className="countdown-content">
                <h1 className="countdown-content__title">Coundown Timer</h1>

                <Display
                    onFocusChange={this.handleDisplayFocusChange}
                    hours={this.state.hours}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    timeInterval={this.state.timeInterval}
                />


                <Keypad onClick={this.handleKeyClick} status={this.state.status} />

                <Controls
                    onStart={this.handleControlsStart}
                    onStop={this.handleControlsStop}
                    onResume={this.handleControlsResume}
                    onReset={this.handleControlsReset}
                    canStart={this.state.canStart}
                    status={this.state.status}
                />

                <div className="btn-back"><Link to='/home'><p className="btn">Back to Home</p></Link></div>

            </div>
        );
    }
}

export default CountdownTimer;
