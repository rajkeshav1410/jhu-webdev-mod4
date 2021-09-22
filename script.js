(function() {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for(var i in names) {
		var name = names[i],
			initial = name.charAt(0).toLowerCase();
		//  initial = names[i][0].toLowerCase();

		if(initial == 'j')
			byeSpeaker.speak(name);
		else 
			helloSpeaker.speak(name);

		// var name = names[i],
		//     initial = name[0];

		// if(initial == 'j' || initial == 'J')
		//     byeSpeaker.speak(names[i]);
		// else 
		//     helloSpeaker.speak(names[i]);
	}
})();