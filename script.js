window.onload=function() {
	var tweetNode = function(profPic, username, twitterHandle, tweetTime, tweetMsg, retweetCnt, favoriteCnt, inlinePic) {
		this.profPic= profPic;
		this.username = username;
		this.twitterHandle = twitterHandle;
		this.tweetTime = tweetTime;
		this.tweetMsg = tweetMsg;
		this.retweetCnt = retweetCnt;
		this.favoriteCnt = favoriteCnt; 
		this.inlinePic = inlinePic;
	}
	var mockModel = {
		nodeList: [
			new tweetNode("https://media.github.ncsu.edu/user/5810/files/3b02b1c4-8f43-11e6-9456-c23dfc8d3d45","Engadget", "@engadget", "8h", "Our fingerprints, eyes and faces will replace passwords. ", "3", "55", null),
			new tweetNode("https://media.github.ncsu.edu/user/5810/files/3dbe3088-8f42-11e6-8e20-4673237b5568","Science Channel", "@ScienceChannel", "2h", "Exoplanet Kepler-452b  is known as \"Earth 2.0.\" It's 60% wider and 5X more massive than Earth.", "12", "235", "https://media.github.ncsu.edu/user/5810/files/4c4e2eb4-8f42-11e6-988c-f7a5bd332e6a"),
			new tweetNode("https://media.github.ncsu.edu/user/5810/files/1f612b7a-8f44-11e6-8217-328eaa7649ec","NASA History Office", "@NASAhistory", "11h", "The Very Large Array (VLA) in Socorro, New Mexico, was dedicated in 1980. Today it continues to explore the depths of the universe.", "50", "24", null)
		]
	};
	ko.applyBindings(mockModel);
}