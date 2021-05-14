import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendTweet = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			displayName: "Anisha P",
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
		<div className='tweetBox'>
			<form>
				<div className='tweetBox_input'>
					<Avatar />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						defaultValue={tweetMessage}
						placeholder="What's happening?"
						type='text'
					/>
				</div>
				<input
					defaultValue={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					className='tweetBox_imageInput'
					placeholder='Optional: Enter image URL'
					type='text'
				/>

				<Button
					onClick={sendTweet}
					type='submit'
					className='tweetBox__tweetButton'>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
