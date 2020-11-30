import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Widgets.css'
import {
    TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton
} from 'react-twitter-embed';

const Widgets = () => {
    return (
        <div className="Widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets-container">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed
                    tweetId={'933354946111705097'}
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Fayez"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={'https://facebook.com/saurabhnemade'}
                    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                />
            </div>
        </div>
    );
};

export default Widgets;