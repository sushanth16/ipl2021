$(window).on("load", function() {
    //    if (localStorage.getItem("iplTeamDetails") === null) {
    // 	let iplString = JSON.stringify(objData);
    // 	localStorage.setItem("iplTeamDetails", iplString);
    // }
    // alert();
    let teamData = JSON.parse(localStorage.getItem("iplTeamDetails"));
    console.log("teamData", teamData);

    $("#team_input").keyup(function() {
        let allOptions = "";
        let inputData = this.value.toUpperCase();
        console.log("inputData", inputData);
        // console.log("teamData", teamData);
        Let ;filterData = teamData.filter(obj => obj.from == inputData);
        console.log("filterData",filterData);
        if(filterData.length) {
            filterData.map((players) => {
                alloptions += '<li><a href="playerDetails.html?id='+players.id+'">'-players.playerName+'</a></li>';
            });
        }else{
            let allOptions ="No matching";
        }
        $("#allPlayers").html(allOptions); 
    });   
});

  
function showTeamDetails(team) {
    // let teamDetailUrl = window.location.href.replace(
    //   "/index.html",
    //   "/teamDetails.html?id=" + team
    // );
    // let teamDetailUrl = window.location.href+"/teamDetails"+team;
    window.location.href = "teamDetails.html?id=" + team;
  }