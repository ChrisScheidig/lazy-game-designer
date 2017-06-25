define(function () {
    

    let counter = 0;

    let playground = document.getElementById('playground');

    let objectDefs = new Map();

    //let createElement = function 

    let createElement = function(data, sub) {
        let obj = undefined;      
        sub = sub ||{};
        if ( el.type === 'symbol' ||el.type === 'text') {
            obj = document.createElement('div');
            obj.style.position = 'absolute'
            obj.style.fontSize = sub.size || data.size;
            obj.style.left = sub.x || data.x;    
            obj.style.top = sub.y || data.y;             
            obj.style.color = sub.color || data.color || 'black';
            obj.innerHTML = sub.value || data.value;   
            obj.className = 'unselectable symbol';
        }
        else if ( el.type === 'text') {

        }
        return obj;
    };

    let createBaseObject = function(base, content, isSub = false) {

        let obj = undefined;


        /// get template
        let templ = objectDefs.get(base);
        if ( templ !== undefined) {
            // create from base!
            obj = document.createElement('div');     
            obj.className = 'dragtest unselectable';
            obj.style.width = templ.size.w;
            obj.style.height = templ.size.h;    

            for (el of templ.elements) {

                // look for overwriting data!
                let data = undefined;
                for( dat of content.data) {
                    if ( dat.name === el.name)
                        data = dat;
                }

                let sub = createElement(el, data);
                if (sub !== undefined)
                obj.appendChild(sub);
            }               
        }
        else {

        }

/*
        if ( base ==="symbol") {

            obj = document.createElement('div');
            obj.style.position = 'absolute'
            obj.style.width = 10;
            obj.style.height = 10;
            obj.style.fontSize = content.fontSize;
            obj.style.left = content.x;    
            obj.style.top = content.y;             
            obj.style.color = content.color || 'black';
            obj.innerHTML = content.face; 
            
            obj.className = 'unselectable symbol';
        }
        else if ( base === "card") {
            
            obj = document.createElement('div');
            obj.className = 'dragtest unselectable';
            obj.style.width = 100;
            obj.style.height = 150;

            obj.appendChild( createBaseObject( "symbol", {
                    face: '&#9673', fontSize:'3em', x: 65, y:5
                }, true ));
            obj.appendChild( createBaseObject( "symbol", {
                    face: getRandomInt(0,30), fontSize:'1em', x: 75, y:5, color:'white'
                }, true ));

            /// content
            let p = document.createElement('p');
            p.textContent =content.text;
            obj.appendChild(p);            

        }  
        else if ( base === "chip") {
            
            obj = document.createElement('div');
            obj.className = 'dragtest unselectable circleBase';
            obj.style.width = 100;
            obj.style.height = 100;

        }  
        */

        if (obj) {
            obj.style.position = 'absolute';    
            if ( !isSub) {        
                obj.id = `FieldObject_${counter++}`;
                playground.appendChild(obj);
            }
        }
        return obj;
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min; 
    }    

    ////// Public interface //////
    return {

        registerObject: function(def) {
            objectDefs.set(def.type, def);
        },
        createObject: function (data) {
       
            let newObject = createBaseObject(data.type, data);

            newObject.style.top = data.y || 0;
            newObject.style.left = data.x || 0;
            newObject.style.transform = `rotate(${getRandomInt(-5,5)}deg)`;



            var menu = [{
                name:  newObject.id,
                title: 'create button',
                fun: function () {

                    $('.dragtest').css("zIndex",99);
                    $(newObject).css('zIndex', 100);
                    //alert('i am add button')
                }
            }, {
                name: 'update',
                title: 'update button'
            }, {
                name: 'delete',
                title: 'create button',
            }];
        
            //Calling context menu
            $(newObject).contextMenu(menu,{
                triggerOn:'contextmenu'
            });
            //Calling context menu
            //$('body').contextMenu(menu,{triggerOn:'contextmenu'});    

            return newObject;
        }
    };
});