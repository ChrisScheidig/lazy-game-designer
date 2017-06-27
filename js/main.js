
define(function (require) {

    //window.onload = init();
    var x_pos = 0,
        y_pos = 0;

    var objGen = require('./objectGenerator');


    let playfield = {
        objects:[]
    }

    function init() {

        counter = 0;

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

        let stapple = objGen.createCardStack(
            ["sj_card"],
            {x:200,y:200, flipped:true}
        );
        let stappleId = stapple.id;

        /// Second: Create our content, the real cards for the game
        /// from our registered templates!
        let card = objGen.createObject( {
            /// our registered template
            type:"cg1_level1",
            stack:stappleId,            
            /// here: template related values to be set!
            data: [
                {name:"cost", value:'10'},
                {name:"text_1", value:"Dies ist eine generierte Karte"}               
            ]
        });

        let card2 = objGen.createObject( {
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
        //makeDraggable(card2.div);
    }

    init();
});
