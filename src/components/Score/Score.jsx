import React from 'react';
import './Score.css';
import styled from 'styled-components';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function Score(props) {
    const { score } = props;
    const scorePourcent = score * 100;

    const data = [
        { uv: scorePourcent, fill: 'red' },
        { uv: 100, fill: '#FBFBFB' }
    ];

    return (
        <ScoreShape>
            <ScoreLegend>Score</ScoreLegend>
            <ScoreDisplay>
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
                <ScoreText>
                    <ScorePurcentage>{scorePourcent}%</ScorePurcentage>
                    <ScoreSubText>
                        de votre <br></br>objectif
                    </ScoreSubText>
                </ScoreText>
            </ScoreDisplay>
        </ScoreShape>
    );
}

const ScoreShape = styled.div`
    background-color: #fbfbfb;
    width: 258px;
    height: 263px;
    border-radius: 5px;
`;

const ScoreLegend = styled.p`
    color: #282d30;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    text-align: start;
    margin: 20px 0 0 20px;
`;

const ScoreDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ScoreText = styled.div`
    position: absolute;
    top: 20%;
    left: 26%;
    text-align: center;
    width: 123px;
    height: 63px;
    border-radius: 50%;
    background-color: white;
    padding: 30px 0;
`;

const ScorePurcentage = styled.b`
    color: #282d30;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    text-align: center;
`;

const ScoreSubText = styled.div`
    color: #74798c;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
`;

export default Score;
