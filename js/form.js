class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(150,30);

        var input = createInput("name");
        input.position(150,110)

        var button =   createButton("PLAY");
        button.position(160,150)  

        var greeting = createElement("h3");

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            
            greeting.html("HI "+name);
            greeting.position(250,250)
        })
        
}
}