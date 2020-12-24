import React, { Component } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';

import { playHoursAudio } from '../../utils/playHoursAudio';
import { playHoursValue } from '../../utils/playHoursAudio';
import { playMinAudio } from '../../utils/playMinAudio';
import { playMinValue } from '../../utils/playMinAudio';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        let today = new Date(),
            minutes = today.getMinutes(),
            minString = minutes < 10 ? '0' + minutes : minutes,
            time = today.getHours() + ':' + minString;

        this.setState({
            time: time
        });
    }

    async handleVoiceButton() {
        const hoursAudio = playHoursAudio();
        const hoursValueAudio = playHoursValue();
        const minAudio = playMinAudio();
        const minValueAudio = playMinValue();
        await hoursAudio.play();
        hoursAudio.onended = () => hoursValueAudio.play();
        if (Array.isArray(minAudio)) {
            hoursValueAudio.onended = () => minAudio[0].play();
            minAudio[0].onended = () => minAudio[1].play();
            minAudio[1].onended = () => minValueAudio.play();
        } else {
            hoursValueAudio.onended = () => minAudio.play();
            minAudio.onended = () => minValueAudio.play();
        }
    }

    render() {
        return (
            <div className="app">
                <p className="time">
                    The time is {this.state.time}
                </p>
                <div className="button-container">
                    <Button variant="outlined" color="secondary" onClick={this.handleVoiceButton}>
                        Озвучить
                    </Button>
                </div>
            </div>
        );
    }
}

export default App;
