import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import API from '../../data/API';
import Format from '../../data/Format';

/**
 * @component
 * @returns RadarGraph component depending of intensity datas
 */
function RadarGraph(props) {
    const { selectedUser } = props;
    const [intensity, setIntensity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        API.getSessionIntensity(selectedUser.id)
            .then((response) => {
                setIntensity(Format.intensityFormat(response));
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [selectedUser]);

    /**
     * Put first letter of each tick in uppercase, speed becomes Speed
     * @returns user activity intensity sessions
     */
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
                    <RadarChart cx={'center'} cy={'center'} outerRadius={75} data={intensity.data}>
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis
                            tickFormatter={CustomPolarAngleAxis}
                            dataKey="kind"
                            stroke="white"
                            tickLine={false}
                            fontSize={12}
                        />
                        <Radar dataKey="value" fill="red" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </RadarGraphShape>
        );
    }
}

RadarGraph.propTypes = {
    /**
     * User selected
     */
    selectedUser: PropTypes.object.isRequired
};

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
