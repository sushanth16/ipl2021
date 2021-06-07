function showPlayerDetails(id){
	window.location.href = "playerDetails.html?id="+id;
}
$(window).on('load', function() {


    let team ="";
	var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == "id") 
        {
            team = sParameterName[1];
            console.log(team);
        }
    }
    console.log("teamOutside",team);
    if(team){
    	let teamData = JSON.parse(localStorage.getItem("iplTeamDetails"));
    	let arrFilter = teamData.filter(obj => obj.from == team);
    	let playerCount = arrFilter.length;
    	console.log(arrFilter)

    	let teamDetails = `<div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/team_logo/${team}_logo.png" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>${team}</h4>
                <span>Player Count - ${playerCount}</span>
                
                <div class="social d-flex">
                   <p><span class="iconify" data-icon="noto-v1:trophy" data-inline="false"></span> 
                   Top Batsman - ${arrFilter[0].playerName}</p>
                   <p><span class="iconify" data-icon="noto-v1:trophy" data-inline="false"></span> 
                   Top Bowler - ${arrFilter[0].playerName}</p>
                </div>
              </div>
            </div>
          </div>`;
          $("#teamCards").html(teamDetails);
          let playerCards = "";
	
		arrFilter.map((players) => {
			let playerStaus = "Not Playing";
			if(players.isPlaying){playerStaus = "Playing";}
		
    let playerFun = "onclick=showPlayerDetails("+players.id+")";
    		playerCards += '<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 detailCard" data-aos="fade-up" data-aos-c="200" id="detailCard'+players.id+'" '+playerFun+'><div class="icon-box"><div class="icon"><img src="assets/img/'+players.description+'.png" class="player-icon" /></div><h4 class="title">Full Name - '+players.playerName+'</h4><p class="description">Team - '+team+'</p><p class="description">Price - '+players.price+'</p><p class="description">Player Status - '+playerStaus+'</p><p class="description">Role - '+players.description+'</p></div></div>';
    		
		});

		$("#playerCards").html(playerCards);
    }
// description: "All-rounder"
// from: "MI"
// id: 0
// isPlaying: true
// playerName: "Hardik Pandya"
// price: "6.50 Cr"

})