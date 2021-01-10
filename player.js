class Player{
constructor(){
this.name=null;
this.index=null;
this.distance=0;
}
getCount(){
    var playerCountRef = database.ref('PlayerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(){
    database.ref('/').update({
      PlayerCount: this.index
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",function(data){
      allPlayers = data.val();
    })
  }


}
