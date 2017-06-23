(function(){
		var override = false,
				overrideEmbed = "https://media.giphy.com/media/xUA7bg8KiG0DKeGAg0/giphy.mp4";

		var embeds = [
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 00:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 01:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 02:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 03:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 04:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 05:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 06:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 07:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=tiny", // 08:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=tiny", // 09:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 10:00
      "https://www.youtube.com/embed/_eBGce6a-0A?autoplay=1&vq=tiny", // 11:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 12:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=tiny", // 13:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 14:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=tiny", // 15:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=tiny", // 16:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 17:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 18:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 19:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 20:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 21:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 22:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=tiny", // 23:00
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
