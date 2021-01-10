class Game{
    constructor(){}

getState()
{
    var gameRef=database.ref('GameState');
    gameRef.on("value",function (data){gameState=data.val();})
}

update(state)
    {
    database.ref("/").update({
        gameState:state
    });
    }

async start()
{
    if(gameState===0)
    {
    player=new Player();
    var playerRef=await database.ref('PlayerCount').once("value");
        if(playerRef.exists())
        {
            playerCount=playerRef.val();
            player.getCount();
        }
    form=new Form();
    form.display();
    }
}
play()
{
    form.hide();
    Text("GAME STARTED",300,200);
    Player.getPlayerInfo();
    var dis_pos=130;
    if(allPlayers !== undefined)
    {
        for(var plr in allPlayers)
        {
            if(plr === "player"+player.index){
                fill("red");
            }
            else
            {
                fill("black");
            }
            dis_pos+=20;
            
            Text(allPlayers[plr].name +":" +allPlayers[plr].distance,100,dis_pos);
        }
    }

    if(keyIsDown(UP_ARROW) )
    {
            player.distance+=20;
            player.update();
    }
}
}
