
define(function (require) {

    //window.onload = init();
    var x_pos = 0,
        y_pos = 0;

    let objGen = require('./objectGenerator');
    let util = require('./util');

    let fulltest = require('./fulltest');
    let example = require('./example1');


    //let playfield = {
    //    objects:[]
    //}

    function init() {
        //fulltest();
        example();
    }

    init();
});
