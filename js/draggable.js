 
 define(function () {
     return  function (obj) {

        let divMove = function(e) {
            obj.style.position = 'absolute';
            obj.style.top = (e.clientY - y_pos) + 'px';
            obj.style.left = (e.clientX - x_pos) + 'px';
            $(obj).contextMenu('close');    
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
 });