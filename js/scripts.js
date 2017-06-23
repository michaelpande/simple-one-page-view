(function(){
		var override = false,
				overrideEmbed = "https://media.giphy.com/media/xUA7bg8KiG0DKeGAg0/giphy.mp4";

		var embeds = [
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 00:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 01:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 02:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 03:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 04:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 05:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 06:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 07:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1", // 08:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1", // 09:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 10:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 11:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 12:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 13:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 14:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1", // 15:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1", // 16:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 17:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 18:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 19:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 20:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 21:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 22:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 23:00
		]

    function setContent(){
      var hour = new Date().getHours();
			content = document.getElementById('content');

			if(override){
        if(content.src !== overrideEmbed){
      	  content.src = overrideEmbed;
        }
				return;
			}
			if(content.src !== embeds[hour]){
      	content.src = embeds[hour];
			}
		}

		setInterval(setContent, 10000);


    // Reload every 30 min
    setInterval(function(){
      location.reload();
    },1300000);
})();
