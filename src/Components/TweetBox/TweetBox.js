import { Button, Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import db from '../../DB';
import './TweetBox.css'
const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: "M.A Fayez",
            username: "ma-fayez",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-9/122789363_395753984777916_5393512747691649159_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=PX_pyfhA4rkAX-rSX7i&_nc_ht=scontent.fcgp3-1.fna&oh=0dadfa97aea966530478f1e6beb51dac&oe=5FE889D8"
        })
        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="TweetBox">
            <form action="">
                <div className="TweetBox-input">
                    <Avatar src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-9/122789363_395753984777916_5393512747691649159_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=PX_pyfhA4rkAX-rSX7i&_nc_ht=scontent.fcgp3-1.fna&oh=0dadfa97aea966530478f1e6beb51dac&oe=5FE889D8" />
                    <input type="text" onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} id="text" placeholder="What's happening?" />
                </div>
                <input className="TweetBox-inputImage" id="image" type="text" onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} placeholder="Enter Image URL" />
                <Button onClick={sendTweet} type="submit" className="tweetBox-tweetBtn">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;