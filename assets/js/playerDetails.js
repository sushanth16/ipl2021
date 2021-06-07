$(window).on('load', function() {

	let playerId ="";
	var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == "id") 
        {
            playerId = sParameterName[1];
            console.log(playerId);
        }
    }
    console.log("playerId",playerId);
let playerDetails ="";
    if(playerId){
    	let teamData = JSON.parse(localStorage.getItem("iplTeamDetails"));
    	let arrFilter = teamData.filter(obj => obj.id == playerId);
    	let playerCount = arrFilter.length;
    	
    	arrFilter.map((players) => {
    		playerDetails = `<div class="profile-card-4 text-center"><img src="assets/img/${players.description}.png" class="img img-responsive">              
                  <div class="profile-description">
                  <h4>Name - ${players.playerName}(${players.from})</h4><p>Price - ${players.price}</p><p>Player Status - ${players.isPlaying}</p><p>Role - ${players.description}</p></div>                  
              </div>
          </div>`;
    	});
    	
          $("#playerDetailCards").html(playerDetails);
    }
     
});