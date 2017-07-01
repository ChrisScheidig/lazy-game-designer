define(function (require) {

    let objGen = require('./objectGenerator');
    let util = require('./util');
    
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
            type:"sj_card",
            size:{w:150,h:200},
            elements: [
                {name:"caption", type:"text", value:"?", size:'1em',x:40,y:10},
                {name:"costs", type:"text", value:"0", size:'2.5em',x:10,y:10},
                {name:"costs2", type:"text", value:"0", size:'2.5em',x:120,y:10},  
                {name:"text", type:"text", value:"?", size:'0.7em',x:10,y:80},
                {name:"fooder", type:"text", value:"?", size:'1em',x:20,y:175}                                                                                              
            ]
        });     
        objGen.registerObject( {
            type:"cg1_torch",
            size:{w:200,h:200},
            elements: [
                {name:"pic", type:"picture", x:0, y:0, w:100,h:100},
                {name:"cost_symbol", type:"symbol", value:'&#9673', x:50, y:10, size:'4em', color:'black'},
                {name:"cost", type:"text", x:67, y:12, size:'1em', color:'white'}                            
            ]
        });   
        objGen.registerObject( {
            type:"cg1_oil",
            form:'round',
            size:{w:50,h:50},
            elements: [
                {name:"pic", type:"picture", x:0, y:0, w:100,h:100,source:'project1/oil1.png'}                      
            ]
        });   


        let stapple = objGen.createCardStack(
            ["sj_card"],
            {x:200,y:200, flipped:true}
        );
        let stappleId = stapple.id;

        /// Second: Create our content, the real cards for the game
        /// from our registered templates!
        let card = objGen.create( {
            /// our registered template
            type:"cg1_level1",
            stack:stappleId,            
            /// here: template related values to be set!
            data: [
                {name:"cost", value:'10'},
                {name:"text_1", value:"Dies ist eine generierte Karte"}               
            ]
        });

        let card2 = objGen.create( {
            /// our registered template
            type:"sj_card",
            stack:stappleId,
            /// here: template related values to be set!
            data: [  
                {name:"caption",value:"Stadthalle"},
                {name:"costs",value:"3"},
                {name:"costs2",value:"3"},
                {name:"text",value:"Ziehe 3 Karten und lege 2 Karten aus der Hand ab. Effekt gilt nur einmal pro Zug."},
                {name:"fooder",value:"2 Siegpunkte"}                                                         
            ]
        });

        let card_torch = objGen.create( {
            /// our registered template
            type:"cg1_torch",           
            /// here: template related values to be set!
            data: [
                {name:"cost", value:'10'},
                {name:"text_1", value:"Dies ist eine generierte Karte"},
                {name:"pic", source:'project1/torch1.png'}              
            ]
        });

        let coal_coins = objGen.create( {type:"cg1_oil", x:200, y:300}, 10);
        util.randomCirclePlacement(coal_coins,50);
        //makeDraggable(card2.div);

        /// now create all cards


    };
});