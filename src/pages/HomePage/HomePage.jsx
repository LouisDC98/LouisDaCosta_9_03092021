import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
import SideNav from '../../components/SideNav/SideNav';
import ResquestBtn from '../../components/RequestBtn/ResquestBtn';
import Welcome from '../../components/Welcome/Welcome';
import Tag from '../../components/Tag/Tag';

function HomePage() {
    const [userSelect, setUserSelect] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const baseURL = 'http://localhost:3000/user/';

    useEffect(() => {
        axios
            .get(`${baseURL + 12}`)
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
            <div className="shapeHomePage">
                <div>
                    <SideNav />
                    <ResquestBtn dataUser={userSelect} toto={setUserSelect} />
                </div>

                <main className="shapeMainHomePage">
                    <Welcome user={userSelect} />
                    <div>
                        {Object.keys(userSelect.keyData).map((data) => (
                            <Tag userData={userSelect.keyData} key={data} data={data} />
                        ))}
                    </div>
                </main>
            </div>
        );
    }
}

export default HomePage;
