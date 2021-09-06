import React, { useEffect } from 'react';
import './RadarGraph.css';
import { getSessionIntensity } from '../../data/API';

function RadarGraph(props) {
    const { selectedUser } = props;

    useEffect(() => {
        getSessionIntensity(selectedUser.id).then((response) => {
            console.log('Intensité session', response.data.data);
        });
    }, []);
    return <div className="shapeRadarGraph">RadarChart</div>;
}

export default RadarGraph;
