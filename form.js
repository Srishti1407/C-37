    class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
       this.greeting=createElement('h3');
    }
display(){

    var title = createElement('h2')
    title.position(200,100);


this.input.position(200,190);
this.button.position(200,250);

    this.button.mousePressed(()=>{
    
    this.input.hide();
    this.button.hide();
    player.Name=this.input.value();
    
    this.greeting.html(" hello " +  player.Name);
    this.greeting.position(200,150);
    playerCount+=1;
    player.index=playerCount;
    player.update();
    player.updateCount();});

}

hide(){
        this.input.hide()
        this.button.hide();
        this.greeting.hide();
}


}