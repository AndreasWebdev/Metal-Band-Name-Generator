$(document).ready(function() {
	var names = ["Mood", "Christian", "Jew", "Dude", "Dead", "Bitch", "Bang", "Anthem",
                 "Anvil", "Rock", "Accept", "Angel", "Illuminaty", "Satan", "Demonic",
                 "Reaper", "Undead", "Dragon", "Slave", "Slayer", "Desolate", "Medieval",
                 "Sword", "Spell", "Holy", "Heaven", "God", "Mighty", "Squad", "Grale",
                 "Death", "Horizon", "Valley", "Talent", "Ultimate", "Pussy", "Steal",
                 "Hurt", "Smash", "Mosh", "Pit", "Park", "Link", "True", "Metal", "Demon",
                 "Whore", "Rider", "Blood", "Burn", "Shipwreck", "Lost", "Soul", "Devil",
                 "Black", "Zombie", "Apocalypse", "Apocalyptic", "Warrior", "Force"];
	var connectors = ["of", "in", "to", "by", "with", "around", "from", "till", "through"];
	var doubleconnectors = ["", " the"];
	
	$( "#generate" ).click(function() {
	
		var name1 = names[Math.floor(Math.random() * names.length)];
		var name2 = names[Math.floor(Math.random() * names.length)];
		var name3 = names[Math.floor(Math.random() * names.length)];
		
		var connector1 = connectors[Math.floor(Math.random() * connectors.length)];
		var doubleconnector1 = doubleconnectors[Math.floor(Math.random() * doubleconnectors.length)];
		
		var name = name1 + " " + name2 + " " + connector1 + doubleconnector1 + " " + name3;
		
		$(".bandname").animate({opacity: 0}, 500, function() { $(".bandname").html(name) });
		$(".bandname").animate({opacity: 1}, 500);
	});
});