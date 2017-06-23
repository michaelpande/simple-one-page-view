(function(){
		var override = false,
				overrideEmbed = "https://media.giphy.com/media/xUA7bg8KiG0DKeGAg0/giphy.mp4";

		var embeds = [
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1&vq=hd720", // 23:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 23:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 23:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 23:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 23:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 23:00
      "https://www.youtube.com/embed/UjALrXRNzGE?autoplay=1", // 23:00
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
			if(content.src !== embeds[0]){
      	content.src = embeds[0];
			}
		}

		setInterval(setContent, 1000);

})();
