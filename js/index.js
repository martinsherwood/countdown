
(function () {
	//future date for the countdown
	var countDownDate = new Date("Aug 9, 2018 17:00:00").getTime();

	//select the elements
	var timerInfo = document.querySelector(".js-timer-info");
	var daysContainer = document.querySelector(".js-timer-days");
	var hoursContainer = document.querySelector(".js-timer-hours");
	var minsContainer = document.querySelector(".js-timer-minutes");
	var secsContainer = document.querySelector(".js-timer-seconds");
	var messageContainer = document.querySelector(".js-timer-message");

	//updating the countdown
	var timer = setInterval(function () {

		//today date and time
		var now = new Date().getTime();

		//distance between now an the count down date
		var distance = countDownDate - now;

		//calculate days, hours, mins, and secs
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
		var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
		var seconds = Math.floor(distance % (1000 * 60) / 1000);

		var a = "",
		b = "",
		c = "",
		d = "";

		if (days > 1) {
			a = "s'";
		}

		if (hours > 1) {
			b = "s'";
		}

		if (minutes > 1) {
			c = "s'";
		}

		if (seconds > 1) {
			d = "s'";
		}

		//insert the datetime data
		daysContainer.innerHTML = days + " <h3 class=\"timer--label\">Day" + a + "</h3>";

		hoursContainer.innerHTML = hours + " <h3 class=\"timer--label\">Hour" + b + "</h3>";

		minsContainer.innerHTML = minutes + " <h3 class=\"timer--label\">Minute" + c + "</h3>";

		secsContainer.innerHTML = seconds + " <h3 class=\"timer--label\">Second" + d + "</h3>";

		//what happens when countdown ends
		if (distance < 0) {
			clearInterval(timer);
			timerInfo.classList.add("is-hidden");
			messageContainer.classList.add("is-visible");
		}
	}, 1000);
})();