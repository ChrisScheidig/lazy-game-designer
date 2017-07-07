 
 define(function () {
     return  function (obj, settings = {}) {

        let div = obj.div;

        obj.forceDrag = function() {
            window.addEventListener('mousemove',divMove,true); 
        };

        let divMove = function(e) {
            div.style.position = 'absolute';
            div.style.top = (e.clientY - y_pos) + 'px';
            div.style.left = (e.clientX - x_pos) + 'px';
            $(div).contextMenu('close');  

            /// inefficient ...
            if ( obj.onDrag) {
                obj.onDrag(e);
            }


        };
        let mouseDown = function(e) {

            // discord mouseDown if this object is placed on a stack
            if ( obj.parent != null) return;

            x_pos = e.clientX -div.offsetLeft;
            y_pos = e.clientY - div.offsetTop;
            window.addEventListener('mousemove',divMove,true);
        }
        let mouseUp = function() {
            window.removeEventListener('mousemove',divMove,true);
            if ( obj.onPlace) {
                obj.onPlace();
            }            
        };

        //if ( settings.startDragged) {
        //    window.addEventListener('mousemove',divMove,true);            
        //}

        div.addEventListener('mousedown',mouseDown,false);
        window.addEventListener('mouseup',mouseUp, false);



        return div;
    }
 });