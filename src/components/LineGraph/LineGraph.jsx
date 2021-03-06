import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import API from 'data/API';
import Format from 'data/Format';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

/**
 * @component
 * @returns LineGraph component depending of activity duration datas
 */
function LineGraph(props) {
    const { selectedUser } = props;
    const [duration, setDuration] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    /* LUT between index and french first day letter */
    const week = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D'
    };

    useEffect(() => {
        API.getSessionDuration(selectedUser.id)
            .then((response) => {
                setDuration(Format.durationFormat(response));
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
     * Format X axis label to display first day letter of week array instead of index
     * @returns Formated Xaxis
     */
    const CustomXaxis = (tick) => {
        return week[tick];
    };

    /**
     * Format tooltip to display duration value
     * @returns Formated div
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <LineGraphToolTip>
                    <p>{`${payload[0].value}min`}</p>
                </LineGraphToolTip>
            );
        }
        return null;
    };

    if (loading) {
        return <div>Loading</div>;
    } else if (error) {
        return <div>Erreur</div>;
    } else {
        return (
            <LineGraphShape>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width="100%" height={30} data={duration} margin={{ left: -65 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                        <XAxis
                            tickFormatter={CustomXaxis}
                            dataKey="day"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            stroke="white"
                            padding={{ left: 15, right: 10 }}
                        />
                        <YAxis
                            domain={['dataMin-25', 'dataMax+40']}
                            axisLine={false}
                            tick={false}
                            label={{ value: 'index', position: 'insideLeft', dy: -150 }}
                        />
                        <Tooltip content={CustomTooltip} />
                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="white"
                            activeDot={{ r: 4 }}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <LineGraphTitle>Dur??e moyenne des sessions</LineGraphTitle>
            </LineGraphShape>
        );
    }
}

LineGraph.propTypes = {
    /**
     * User selected
     */
    selectedUser: PropTypes.object.isRequired
};

const LineGraphShape = styled.div`
    width: 258px;
    height: 263px;
    border-radius: 5px;
    background: linear-gradient(to right, #ff0000 75%, #df0000 25%);
    position: relative;
    @media (max-width: 1024px) {
        width: 30%;
    }
`;

const LineGraphToolTip = styled.div`
    background-color: white;
    color: black;
    padding: 1px 5px;
    font-size: 14px;
    text-align: center;
`;

const LineGraphTitle = styled.div`
    position: absolute;
    left: 25px;
    top: 30px;
    color: #ffffff90;
    width: 160px;
`;

export default LineGraph;
