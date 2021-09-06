import React, { useEffect, useState } from 'react';
import './LineGraph.css';
import { getSessionDuration } from '../../data/API';
import {
    LineChart,
    Line,
    // XAxis,
    // YAxis,
    CartesianGrid,
    Tooltip,
    // Legend,
    ResponsiveContainer
} from 'recharts';

function LineGraph(props) {
    const { selectedUser } = props;
    const [duration, setDuration] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getSessionDuration(selectedUser.id)
            .then((response) => {
                setDuration(response.data.data.sessions);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [selectedUser]);

    console.log(duration);

    if (loading) {
        return <div>Loading</div>;
    } else if (error) {
        return <div>Erreur</div>;
    } else {
        return (
            <div className="shapeLineGraph">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={50}
                        height={30}
                        data={duration}
                        padding={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                        {/* <XAxis /> */}
                        {/* <YAxis /> */}
                        <Tooltip labelStyle={{ display: 'none' }} />
                        {/* <Legend /> */}
                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="white"
                            activeDot={{ r: 8 }}
                        />
                        {/* <Line type="monotone" dataKey="uv" stroke="blue" /> */}
                    </LineChart>
                </ResponsiveContainer>
            </div>
            // <div>coucou</div>
        );
    }
}

export default LineGraph;
