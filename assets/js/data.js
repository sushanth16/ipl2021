let objData = [
	{
		"id": 0,
		"playerName": "Hardik Pandya",
		"from": "MI",
		"price": "6.50 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 1,
		"playerName": "Rohit Sharma",
		"from": "MI",
		"price": "15.50 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 3,
		"playerName": "Surya Kumar Yadav",
		"from": "MI",
		"price": "10.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 4,
		"playerName": "AB de Villiers",
		"from": "RCB",
		"price": "6.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 5,
		"playerName": "Andre Russell",
		"from": "KKR",
		"price": "15.50 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 6,
		"playerName": "Rishab Pant",
		"from": "DC",
		"price": "14.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 7,
		"playerName": "Shreyas Iyer",
		"from": "DC",
		"price": "12.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 8,
		"playerName": "Virat Kohli",
		"from": "RCB",
		"price": "22.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 9,
		"playerName": "Ben Stokes",
		"from": "RR",
		"price": "14.50 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 10,
		"playerName": "Eoin Morgan",
		"from": "KKR",
		"price": "6.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 11,
		"playerName": "K L Rahul",
		"from": "PBKS",
		"price": "18 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 12,
		"playerName": "David Warner",
		"from": "SRH",
		"price": "14.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 13,
		"playerName": "Kane Williamson",
		"from": "SRH",
		"price": "16.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	},
	{
		"id": 14,
		"playerName": "Shakib Al Hasan",
		"from": "KKR",
		"price": "5 Cr",
		"isPlaying": true,
		"description": "All-rounder"
	},
	{
		"id": 15,
		"playerName": "M S Dhoni",
		"from": "CSK",
		"price": "21.50 Cr",
		"isPlaying": true,
		"description": "Batsman"
	}
	
];

$(window).on('load', function() {
    if (localStorage.getItem("iplTeamDetails") === null) {
		let iplString = JSON.stringify(objData);
		localStorage.setItem("iplTeamDetails", iplString);
	}
});
