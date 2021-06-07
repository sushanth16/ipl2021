$('#Submit1').click(function(e){
    console.log('clicked')
    if(fullname.value === '' ){
    alert('fill form completely!!')
    e.preventDefault();
    }
    else{
        console.log(JSON.parse(localStorage.teamData))
        var teamData = JSON.parse(localStorage.teamData);
        var id = teamData[teamData.length-1].id;
        var obj={
            id: id+1,
            fullName: fullname.value,
            championshipsWon: parseInt(number.value),
            key: key.value,
            teamIcon:imageUrl.value
        }
        teamData.push(obj);
        console.log(teamData)
        localStorage.setItem('teamData',JSON.stringify(teamData))
        
        alert('Filled Successfully!')
        e.preventDefault();
        window.open('./index.html')
    }
})