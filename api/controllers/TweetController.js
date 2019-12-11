/**
 * TweetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var twitter = require('twitter');

module.exports = {
	getStreamTweets:function(req, res) {
		//return res.send("test");

		var init = false;

		
		if (!sails.config.twitter) {
			return res.serverError("Config Variable Not Found");
		}

		//Subscribing the requesting socket to the room 'tweets'
		//sails.sockets.join(req, 'tweets-channel');

		var twitterClient = new twitter(sails.config.twitter);

		// Set a stream listener for tweets matching tracking keywords
		twitterClient.stream('statuses/filter', {
			track: '#india'
		}, function(stream) {
            
            stream.on('data', function (data) {
  
                console.log("stream data => ", data);
            
                Tweet.create({
                  tweet_id: data.id,
                  active: false,
                  author: data.user.name,
                  avatar: data.user.profile_image_url,
                  body: data.text,
                  date: data.created_at,
                  screen_name: data.user.screen_name
                },
                function (err, res) {
                  if (err) {
                    console.error("error in creating a Tweet", err);
                  }
            
                  sails.sockets.broadcast('tweets-channel', 'new-tweets', res);
                });

            });
			console.log("tweets stream: ", stream);
		});

		/*Tweet
			.find()
			.exec(function(err, tweets) {
				if (err) {
					return res.serverError(err);
				}

				if (!init) {
					init = true;
					sails.sockets.broadcast('tweets-channel', 'new-tweets', tweets);
				}

				tweets.forEach(function(tweet) {
					tweet.active = true;
				});

			});*/
        return res.send("test");

	}
};