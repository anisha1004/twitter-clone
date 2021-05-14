import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName : "Anisha P",
            username: "Anisha",
            verified: true,
            text: tweetMessage,
            avatar: "AccountCircleIcon",
            image: tweetImage,
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar  />
                    <input 
                    onchange={(e) => setTweetMessage(e.target.value)}
                    default value={tweetMessage} 
                    placeholder="What's happening?" 
                    type="text" 
                /> 
                </div>
                <input 
                value={tweetImage}
                onchange={(e) => setTweetImage(e.target.value)}
                className="tweetBox_imageInput"
                placeholder="Optional: Enter image URL" 
                type="text" 
                />

                <Button onclick={sendTweet}
                type="submit" 
                className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox
