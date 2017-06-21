define(function () {

    let counter = 0;

    let playground = document.getElementById('playground');

    let objectDefs = [];

    let createBaseObject = function(base, content) {

        let obj = undefined;

        if ( base === "card") {
            
            obj = document.createElement('div');
            obj.className = 'dragtest unselectable';
            obj.style.width = 100;
            obj.style.height = 150;

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

        if (obj) {
            obj.style.position = 'absolute';            
            obj.id = `FieldObject_${counter++}`;
            playground.appendChild(obj);
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

        },
        createObject: function (data) {
       
            let newObject = createBaseObject(data.type || 'card', data.content);
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