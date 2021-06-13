import DisplayTimers from '../../../components/DisplayTimers'
export default class Time {
    getTime(timeInMilliseconds) {
        let time = timeInMilliseconds;
        const hours = this.formatUnitOfTime(Math.floor(time / (60 * 60 * 1000)));
        time = time % (60 * 60 * 1000);
        const minutes = this.formatUnitOfTime(Math.floor(time / (60 * 1000)));
        time = time % (60 * 1000);
        const seconds = this.formatUnitOfTime(Math.floor(time / 1000));
        const milliseconds = this.formatUnitOfTime((time % 1000));

        // return `${hours}:${minutes}:${seconds}
        // :${milliseconds}`;
        return (
            <DisplayTimers
                hour={minutes}
                minute={seconds}
                second={milliseconds}
            />
        )
    }

    formatUnitOfTime(unitOfTime) {
        return unitOfTime < 10 ? `0${unitOfTime}` : unitOfTime.toString().substr(0, 2);
    }
}