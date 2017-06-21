
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

        let obj1 = objGen.createObject( {
            type:"card",x:100,y:100,
            /// Content ist abhängig vom Objecttyp!
            content: {
                text:"eine ganz besondere Karte"
            }
        });
        makeDraggable(obj1);

        let obj2 = objGen.createObject( {
            type:"chip",x:300,y:100,
            /// Content ist abhängig vom Objecttyp!
            content: {
            }
        });
        makeDraggable(obj2);

        let obj3 = objGen.createObject( {
            type:"card",x:200,y:300,
            /// Content ist abhängig vom Objecttyp!
            content: {
                text:"Eine langweilige Karte"
            }
        });
        makeDraggable(obj3);
 
        let obj4 = objGen.createObject( {
            type:"card",x:250,y:300,
            /// Content ist abhängig vom Objecttyp!
            content: {
                text:"SCHATZKARTE???"
            }
        });
        makeDraggable(obj4);


        var testObj = {
            value:1,
            objects: [
                {id:2},
                {id:3},
                {id:4}
            ]
        }

        console.log( JSON.stringify(testObj));

    }

    init();
});
