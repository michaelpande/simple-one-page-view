(function(){
		var override = false,
				overrideVideo = "https://media.giphy.com/media/xUA7bg8KiG0DKeGAg0/giphy.mp4",
        overrideText = "";

		var animations = [
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 0:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 1:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 2:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 3:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 4:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 5:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 6:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 7:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 8:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 9:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 10:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 11:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 12:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 13:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 14:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 15:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 16:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 17:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 18:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 19:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 20:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 21:00
			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""}, // 22:00
 			{video: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.mp4", text: ""} // 23:00
		]

    function setAnimation(){
      var hour = new Date().getHours();
			videoContainer = document.getElementById('videoContainer');
      videoText = document.getElementById('videoText');

			if(override){
        if(videoContainer.src !== overrideVideo){
      	  videoContainer.src = overrideVideo;
          videoText.innerHTML = overrideText;
        }
				return;
			}
			if(videoContainer.src !== animations[hour].video){
      	videoContainer.src = animations[hour].video;
        videoText.innerHTML = animations[hour].text;
			}
		}

		setInterval(setAnimation, 1000);

})();
