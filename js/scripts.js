(function(){
		var override = false,
				overrideEmbed = "https://media.giphy.com/media/xUA7bg8KiG0DKeGAg0/giphy.mp4";

		var embeds = [
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 00:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 01:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 02:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 03:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 04:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 05:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 06:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 07:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=default", // 08:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=default", // 09:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 10:00
      "https://www.youtube.com/embed/_eBGce6a-0A?autoplay=1&vq=default", // 11:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 12:00
      "https://www.youtube.com/embed/_qRIDttgY7o?autoplay=1&vq=default", // 13:00
      "https://www.youtube.com/embed/_qRIDttgY7o?autoplay=1&vq=default", // 14:00
      "https://www.youtube.com/embed/_qRIDttgY7o?autoplay=1&vq=default", // 15:00
      "https://www.youtube.com/embed/PPmnFbpnvMQ?autoplay=1&vq=default", // 16:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 17:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 18:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 19:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 20:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 21:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 22:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=default", // 23:00
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
