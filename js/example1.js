define(function (require) {

    let objGen = require('./objectGenerator');
    let util = require('./util');

    /// helper functions
    let createPlayerCard = function(stapple,count, img,caption, text) {
        let card = objGen.create( {
            /// our registered template
            type:"playercards_1",
            stack:stapple,
            /// here: template related values to be set!
            data: [  
                {name:"caption",value:caption},
                {name:"pic", source:img},              
                {name:"text",value:text},
                                                  
            ]
        }, count);
        return card;
    };
    let createDungeonCard = function(stapple,count, img,caption, text) {
        let card = objGen.create( {
            /// our registered template
            type:"dungeoncards_1",
            stack:stapple,
            /// here: template related values to be set!
            data: [  
                {name:"caption",value:caption},
                {name:"pic", source:img},              
                {name:"text",value:text},
                                                  
            ]
        }, count);
        return card;
    };

    return function() {

        /// First: Register Card types for our game. This should be
        /// outsourced to data later on
        objGen.registerObject( {
            type:"cg1_level1",
            size:{w:150,h:200},
            elements: [
                {name:"text_1", type:"text", size:'1em',y:55},
                {name:"cost_symbol", type:"symbol", value:'&#9673', x:50, y:10, size:'4em', color:'black'},
                {name:"cost", type:"text", x:67, y:12, size:'1em', color:'white'}                            
            ]
        });
        objGen.registerObject( {
            type:"playercards_1",
            size:{w:150,h:200},
            elements: [
                {name:"pic", type:"picture", x:50, y:50, w:50,h:50},            
                {name:"caption", type:"text", value:"?", size:'1em',x:40,y:10},
                //{name:"costs", type:"text", value:"0", size:'2.5em',x:10,y:10},
                //{name:"costs2", type:"text", value:"0", size:'2.5em',x:120,y:10},  
                {name:"text", type:"text", value:"?", size:'0.7em',x:10,y:100},
                //{name:"fooder", type:"text", value:"?", size:'1em',x:20,y:175}                                                                                              
            ]
        });    
        objGen.registerObject( {
            type:"dungeoncards_1",
            size:{w:150,h:200},
            elements: [
                {name:"pic", type:"picture", x:40, y:35, w:70,h:70},            
                {name:"caption", type:"text", value:"?", size:'1em',x:10,y:10},
                //{name:"costs", type:"text", value:"0", size:'2.5em',x:10,y:10},
                //{name:"costs2", type:"text", value:"0", size:'2.5em',x:120,y:10},  
                {name:"text", type:"text", value:"?", size:'0.7em',x:10,y:105},
                //{name:"fooder", type:"text", value:"?", size:'1em',x:20,y:175}                                                                                              
            ]
        });             
        objGen.registerObject( {
            type:"torchBig",
            size:{w:200,h:200},
            elements: [
                {name:"pic", type:"picture", x:0, y:0, w:200,h:200, source:'project1/torch1.png'},                        
            ]
        });   
        objGen.registerObject( {
            type:"torchSmall",
            form:'round',            
            size:{w:100,h:100},
            elements: [
                {name:"pic", type:"picture", x:0, y:0, w:100,h:100, source:'project1/torch1.png'},                        
            ]
        });           
        objGen.registerObject( {
            type:"cg1_oil",
            form:'round',
            size:{w:50,h:50},
            elements: [
                {name:"pic", type:"picture", x:0, y:0, w:50,h:50,source:'project1/oil1.png'}                      
            ]
        });   

        /// now create all cards
        let card_torch = objGen.create( {type:"torchBig", x: 50, y:300});
        objGen.create( {type:"torchSmall", x: 150, y:350});       
        let coal_coins = objGen.create( {type:"cg1_oil", x:0, y:300}, 10);
        util.randomCirclePlacement(coal_coins,50);


        let playerStapple = objGen.createCardStack(
            ["playercards_1"],
            {x:900,y:100, flipped:true}
        );
        let dungeonStapple = objGen.createCardStack(
            ["dungeoncards_1"],
            {x:270,y:300, flipped:true}
        );


        createPlayerCard(playerStapple.id,10, 'project1/pickaxe.png', "Spitzhacke",
            "Ziehe 3 Karten und lege 2 Karten aus der Hand ab. Effekt gilt nur einmal pro Zug.");
        createPlayerCard(playerStapple.id,10, 'project1/oil1.png', "Kleines Ölfläschchen",
            "Erhöhe den Ölvorat um 2.");

        createDungeonCard(dungeonStapple.id,5, 'project1/gold1.png', "Goldader",
            "Nutze eine Spitzhacke zum Abbauen.");
        createDungeonCard(dungeonStapple.id,10, 'project1/cave1.png', "Dunkle Höhle",
            "");
        createDungeonCard(dungeonStapple.id,4, 'project1/meal1.png', "Schneller Snack",
            "Ziehe 2 Karten.");

        playerStapple.shuffle();
        dungeonStapple.shuffle();
    };
});