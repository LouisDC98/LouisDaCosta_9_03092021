import React, { useEffect } from 'react';
import './LineGraph.css';
import { getSessionDuration } from '../../data/API';

function LineGraph(props) {
    const { selectedUser } = props;

    useEffect(() => {
        getSessionDuration(selectedUser.id).then((response) => {
            console.log('Durée session', response.data.data);
        });
    }, []);
    return <div className="shapeLineGraph">LineGraph</div>;
}

export default LineGraph;
