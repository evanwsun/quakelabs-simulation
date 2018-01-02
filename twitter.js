//@ts-check
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const tweet = text => {
    client.post("statuses/update", { status: text }, function(
        error,
        tweet,
        response
    ) {
        if (error) {
            
            throw error;
        }
        console.log(tweet); // Tweet body.
       // console.log(response); // Raw response object.
    });
};

module.exports = {'tweet':tweet}