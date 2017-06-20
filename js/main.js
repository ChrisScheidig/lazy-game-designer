
window.onload = init();
var x_pos = 0,
    y_pos = 0;

function createBox(x,y) {
    let playground = document.getElementById('playground');
    let newObject = document.createElement('div');
    newObject.className = 'dragtest';
    newObject.style.position = 'absolute';
    newObject.style.top = y;
    newObject.style.left = x;
    playground.appendChild(newObject);
    return newObject;
}

function addDragFunctionality(obj) {

    let divMove = function(e) {
        obj.style.position = 'absolute';
        obj.style.top = (e.clientY - y_pos) + 'px';
        obj.style.left = (e.clientX - x_pos) + 'px';
    }
    let mouseDown = function(e) {
        x_pos = e.clientX - obj.offsetLeft;
        y_pos = e.clientY - obj.offsetTop;
        window.addEventListener('mousemove',divMove,true);
    }
    let mouseUp = function() {
        window.removeEventListener('mousemove',divMove,true);
    }   

    obj.addEventListener('mousedown',mouseDown,false);
    window.addEventListener('mouseup',mouseUp, false);
    return obj;
}

function init() {
    addDragFunctionality(createBox(100,100));
    addDragFunctionality(createBox(300,100));  
    addDragFunctionality(createBox(200,300));    
}
