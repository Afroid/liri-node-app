//Set up a main var to use functions within it.
var liri = (function () {

	//Grabbing everything in keys.js which is also using a config.js file 
	//by way of module.exports
	var client = require("./keys");

	//Functionality for retrieving your tweets
	var myTweets = function () {

		//The parameters to use for getting back tweets
		//from a specific username and specifies how many you want at most
		var params = {
			screen_name: "GTBootJohn", 
			count: 20
		}

		//This makes a connection and 'gets' the information from the user's timeline
		client.twitterKeys.get('statuses/user_timeline', params, function (error, tweets, response) {

			//This is a for loop to get 20 tweets from the user's timeline
			//and logs them in the console.
			for(var i = 0; i < tweets.length; i++){
				console.log(tweets[i].text.replace('@_', ''));
				console.log("");
				console.log("");
			}

			//If there's an error, log it in the console
			if(error){
				console.log("Error message: ", error);
			}
		});

	}

	//I think on 04/06/2017 John McSwain said we could choose just one of the API's to work with.
	var spotify = function(){

	}

	//If I'm wrong, then I doubt I'll have functionality in time for these two.
	var movie = function(){

	}

	//returns the tweets
	return{
		myTweets: myTweets
	}

})();

//Gets the argument "my-tweets" from "node liri.js my-tweets"
var userInput = process.argv[2];

//References myTweets inside of liri if my-tweets was typed
if(userInput == "my-tweets"){
	liri.myTweets();
}