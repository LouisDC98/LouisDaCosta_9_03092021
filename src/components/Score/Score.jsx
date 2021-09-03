import React from 'react';
import './Score.css';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function Score(props) {
    const { score } = props;
    const scorePourcent = score * 100;

    const data = [
        { uv: scorePourcent, fill: 'red' },
        { uv: 100, fill: '#FBFBFB' }
    ];

    return (
        <div className="shapeScore">
            <div className="legendScore">Score</div>
            <div className="displayScore">
                <ResponsiveContainer width={200} height={200}>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="70%"
                        outerRadius="100%"
                        data={data}>
                        <RadialBar
                            minAngle={15}
                            clockWise={true}
                            dataKey="uv"
                            className="radial"
                            cornerRadius={40}
                            background={{ fill: '#FBFBFB' }}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="textScore">
                    <b className="purcentage">{scorePourcent}%</b>
                    <div className="subText">
                        de votre <br></br>objectif
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Score;
