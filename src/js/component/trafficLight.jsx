import React from "react";
import '../../styles/trafficLight.css'


const TrafficLight = () => {
    return (
        <>
            <div className="stem"></div>
			<div className="traffic-light-body">
				<div className="red light"></div>
				<div className="yellow light"></div>
				<div className="green light"></div>
			</div>
        </>
    );
};

export default TrafficLight;