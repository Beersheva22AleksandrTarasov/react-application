import { CSSProperties } from "react";
import timeZones from '../time-zones';
type Props = {
    place: string,
    time: Date
};
const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
};
function getTimeZones(place: string): string | undefined {
    const timePlace =
        timeZones.find(timeZn => JSON.stringify(timeZn).includes(place));
    return timePlace?.name;
}

export const Clock: React.FC<Props> = ({ place, time }) => {

    const timeZone: string | undefined = getTimeZones(place);

    const timeSt: string = time.toLocaleTimeString(undefined,
        { timeZone })

    const nameOfPlace: string = (timeZone) || "Israel";

    return <div style={style}>
        <header>
            {nameOfPlace}
        </header>
        <p>{timeSt}</p>
    </div>
}