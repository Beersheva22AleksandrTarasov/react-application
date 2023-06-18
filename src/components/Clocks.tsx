import React, { useEffect, useState } from "react";
import { Clock } from "./Clock";

const Clocks: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const places = ["Istanbul", "Dubai", "New York", "London"];



    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
            }}
        >
            {places.map((place) => (
                <Clock key={place} time={time} place={place} />
            ))}
        </div>
    );
};

export default Clocks;

