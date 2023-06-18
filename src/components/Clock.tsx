import { CSSProperties } from "react";
import timeZones from '../time-zones';
type Props = {
    place: string,
    time: Date
};
const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};
function getTimeZone(place: string): string | undefined {
    const timePlace =
        timeZones.find(tz => JSON.stringify(tz).includes(place));
    return timePlace?.name;
}
export const Clock: React.FC<Props> = ({place, time}) => {
    const timeZone: string | undefined = getTimeZone(place);
    const title: string = (timeZone && place) || "Israel";
    const timeSt: string = time.toLocaleTimeString(undefined,
        { timeZone })

    return <div style={style}>
        <header>
            {title}
        </header>
        <p>{timeSt}</p>
    </div>
}