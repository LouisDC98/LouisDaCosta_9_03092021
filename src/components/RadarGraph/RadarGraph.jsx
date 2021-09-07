import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getSessionIntensity } from '../../data/API';

function RadarGraph(props) {
    const { selectedUser } = props;
    const [intensity, setIntensity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getSessionIntensity(selectedUser.id)
            .then((response) => {
                setIntensity(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [selectedUser]);

    const CustomPolarAngleAxis = (tick) => {
        return intensity.kind[tick].charAt(0).toUpperCase() + intensity.kind[tick].slice(1);
    };

    if (loading) {
        return <div>Loading</div>;
    } else if (error) {
        return <div>Erreur</div>;
    } else {
        return (
            <RadarGraphShape>
                <ResponsiveContainer width="100%" height="90%">
                    <RadarChart cx={'center'} cy={'center'} outerRadius={80} data={intensity.data}>
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis
                            tickFormatter={CustomPolarAngleAxis}
                            dataKey="kind"
                            stroke="white"
                            tickLine={false}
                        />
                        <Radar dataKey="value" fill="red" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </RadarGraphShape>
        );
    }
}

const RadarGraphShape = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #282d30;
    width: 258px;
    height: 263px;
    border-radius: 5px;
`;

export default RadarGraph;
