import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import React from 'react';
import './Post.css'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
const Post = ({ displayName, username, verified, text, image, avatar }) => {
    return (
        <div className="Post">
            <div className="avatar-post">
                <Avatar src={avatar} />
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-header-text">
                        <h3>
                            {displayName}
                            <span className="post-user"> <VerifiedUserIcon className={verified ? "post-badge verified" : "post-badge notVerified"} /> {username} </span>
                        </h3>
                    </div>
                    <div className="post-Description">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
};

export default Post;