define(function (require) {

  return {
    getRandomInt:function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min; 
    },
    randomCirclePlacement: function(objects, radius) {
         for(obj of objects) {
            let angle = Math.random() * Math.PI*2;
            let x = Math.cos(angle) * radius * Math.random();
            let y = Math.sin(angle) * radius * Math.random();
            console.log(obj.div.style.top);
            obj.div.style.top = parseInt(obj.div.style.top) + x;
            obj.div.style.left = parseInt(obj.div.style.left) + y;          
         }
    },
    /// from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    shuffleArray: function(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }    
  };
});