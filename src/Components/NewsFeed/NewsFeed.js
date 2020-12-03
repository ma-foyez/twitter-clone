import React, { useEffect, useState } from 'react';
import db from '../../DB';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './NewsFeed.css'
import FlipMove from 'react-flip-move';

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
            <FlipMove>
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
            </FlipMove>
        </div>
    );
};

export default NewsFeed;