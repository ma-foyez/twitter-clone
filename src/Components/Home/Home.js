import React from 'react';
import NewsFeed from '../NewsFeed/NewsFeed';
import Sidebar from '../Sidebar/Sidebar';
import Widgets from '../Widgets/Widgets';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-3 side">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-5 feed">
                    <NewsFeed />
                </div>
                <div className="col-4 d-none d-md-block widget">
                    <Widgets />
                </div>
            </div>
        </div>
    );
};

export default Home;