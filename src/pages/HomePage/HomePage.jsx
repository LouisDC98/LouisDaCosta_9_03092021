import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SideNav from '../../components/SideNav/SideNav';
import ResquestBtn from '../../components/RequestBtn/ResquestBtn';
import Welcome from '../../components/Welcome/Welcome';
import Tag from '../../components/Tag/Tag';
import Score from '../../components/Score/Score';
import BarGraph from '../../components/BarGraph/BarGraph';
import LineGraph from '../../components/LineGraph/LineGraph';
import RadarGraph from '../../components/RadarGraph/RadarGraph';
import API from '../../data/API';

/**
 * @component
 * @returns HomePage with many components
 */
function HomePage() {
    const [userSelect, setUserSelect] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        API.getInitialUser()
            .then((response) => {
                setUserSelect(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading</div>;
    } else if (error) {
        return <div>Erreur</div>;
    } else {
        return (
            <HomePageShape>
                <HomePageSide>
                    <ResquestBtn dataUser={userSelect} selectedUser={setUserSelect} />
                    <SideNav />
                </HomePageSide>

                <HomePageMainShape>
                    <Welcome user={userSelect} />
                    <HomePageMainBlock>
                        <HomePageMainGraph>
                            <BarGraph selectedUser={userSelect} />
                            <HomePageLittleGraph>
                                <LineGraph selectedUser={userSelect} />
                                <RadarGraph selectedUser={userSelect} />
                                <Score score={userSelect.todayScore} />
                            </HomePageLittleGraph>
                        </HomePageMainGraph>

                        <div>
                            {Object.keys(userSelect.keyData).map((countCategory) => (
                                <Tag
                                    countValue={userSelect.keyData[countCategory]}
                                    key={countCategory}
                                    countCategory={countCategory}
                                />
                            ))}
                        </div>
                    </HomePageMainBlock>
                </HomePageMainShape>
            </HomePageShape>
        );
    }
}

const HomePageShape = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const HomePageSide = styled.div`
    margin-top: -5px;
`;

const HomePageMainShape = styled.main`
    width: 100%;
    padding: 0 50px;
`;

const HomePageMainBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }
`;

const HomePageMainGraph = styled.div`
    width: 100%;
`;

const HomePageLittleGraph = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    width: 835px;
`;

export default HomePage;
