(function(){
		var override = false,
				overrideEmbed = "https://media.giphy.com/media/xUA7bg8KiG0DKeGAg0/giphy.mp4";

		var embeds = [
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 00:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 01:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 02:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 03:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 04:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 05:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 06:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 07:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=small", // 08:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=small", // 09:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 10:00
      "https://www.youtube.com/embed/_eBGce6a-0A?autoplay=1&vq=small", // 11:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 12:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=small", // 13:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 14:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=small", // 15:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=small", // 16:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 17:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 18:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 19:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 20:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 21:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 22:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=small", // 23:00
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


    // Reload every hour
    setInterval(function(){
      location.reload();
    },2600000);
})();
