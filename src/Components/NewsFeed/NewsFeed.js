import React, { useEffect, useState } from 'react';
import db from '../../Firebase';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './NewsFeed.css'
const NewsFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return (
        <div className="news-feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {
                posts.map(post => (
                    <Post
                        displayName={post.displayName}
                        username={post.username}
                        verified={true}
                        text={post.text}
                        image={post.image}
                        avatar={post.avatar} />
                ))
            }

        </div>
    );
};

export default NewsFeed;