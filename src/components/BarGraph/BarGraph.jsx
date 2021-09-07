import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getActivity } from '../../data/API';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';

function BarGraph(props) {
    const { selectedUser } = props;
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <BarGraphToolTip>
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}kCal`}</p>
                </BarGraphToolTip>
            );
        }

        return null;
    };

    useEffect(() => {
        getActivity(selectedUser.id)
            .then((response) => {
                response.data.data.map;
                setActivity(
                    response.data.data.sessions.map((activity, i) => {
                        return { ...activity, index: i + 1 };
                    })
                );
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [selectedUser]);

    if (loading) {
        return <div>Loading</div>;
    } else if (error) {
        return <div>Erreur</div>;
    } else {
        return (
            <BarGraphShape>
                <BarGraphTitle>Activité quotidienne</BarGraphTitle>
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                        width={500}
                        height={300}
                        data={activity}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey={'index'} tickLine={false} />
                        <YAxis
                            dataKey="calories"
                            axisLine={false}
                            tickLine={false}
                            orientation={'right'}
                        />
                        <Legend
                            align={'right'}
                            verticalAlign={'top'}
                            iconType={'circle'}
                            payload={[
                                { value: 'Poids (kg)', type: 'circle', color: '#282D30' },
                                {
                                    value: 'Calories brûlées (kCal)',
                                    type: 'circle',
                                    color: '#E60000'
                                }
                            ]}
                            wrapperStyle={{
                                paddingBottom: '30px'
                            }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar
                            dataKey="kilogram"
                            fill="#282D30"
                            radius={[10, 10, 0, 0]}
                            barSize={10}
                        />
                        <Bar
                            dataKey="calories"
                            fill="#E60000"
                            radius={[10, 10, 0, 0]}
                            barSize={10}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </BarGraphShape>
        );
    }
}

const BarGraphShape = styled.div`
    background-color: #fbfbfb;
    width: 835px;
    height: 320px;
    position: relative;
    padding: 20px 0 0 0;
    border-radius: 5px;
`;

const BarGraphTitle = styled.p`
    color: #282d30;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 25px;
    top: 25px;
`;

const BarGraphToolTip = styled.div`
    background-color: #e60000;
    color: white;
    padding: 5px;
    font-size: 14px;
    text-align: center;
`;

export default BarGraph;
