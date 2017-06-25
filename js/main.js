
define(function (require) {

    //window.onload = init();
    var x_pos = 0,
        y_pos = 0;

    var objGen = require('./objectGenerator');
    var makeDraggable = require('./draggable');

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

        /// Second: Create our content, the real cards for the game
        /// from our registered templates!
        let card = objGen.createObject( {
            /// our registered template
            type:"cg1_level1",
            /// here: template related values to be set!
            data: [
                {name:"cost", value:'10'},
                {name:"text_1", value:"Dies ist eine generierte Karte"}               
            ]
        });
        makeDraggable(card);

        let card2 = objGen.createObject( {
            /// our registered template
            type:"cg1_level1",
            /// here: template related values to be set!
            data: [   
                {name:"cost", value:'2'}                    
            ]
        });
        makeDraggable(card2);
    }

    init();
});
