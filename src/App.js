import React, {useState} from 'react';

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";


import '@leenguyen/react-flip-clock-countdown/dist/index.css'


import Video from './assets/video.mp4'

import './styles.css'

const App = () => {
    const [date, setDate] = useState(new Date().getTime() + 24 * 3600 * 1000 + 5000)

    const handleClickReset = () => {
        setDate(new Date().getTime() + 24 * 3600 * 1000 + 5000)
    }

    return <section className='page'>
        <div className='overlay'></div>

        <video src={Video} autoPlay loop muted></video>

        <div className="page__content">
            <h1>Launch soon</h1>
            <h3>Countdown to the grand unveiling of my latest innovation!</h3>

            <FlipClockCountdown to={date}
                                className='flip-clock'
                                labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                                duration={0.5}
            />
            <button className="btn" onClick={handleClickReset}>
                Starting Over
            </button>
        </div>


    </section>;
};

export default App;
