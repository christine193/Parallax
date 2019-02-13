//html elements

var pupils = document.getElementsByClassName('pupil');

//turn into array instead of an HTMLcollection so we can work with the elements
var pupilsArray = Array.from(pupils);

//console.log('pupilsArray', pupilsArray)




//input setup

var input = {
    mouseX: {
        start:0,
        end:window.innerWidth, //screens width
        current:0,
       },
    
       mouseY: {
        start:0,
        end:window.innerHeight,
        current:0
       }

    };
    
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

//output
var output = {
    x: {
        start:-100,
        end:80,
        current: 0,
    },
    y:{
        start:-120,
        end:60,
        current: 0,
    },
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;



var handleMouseMove = function (event){
    //mouse x input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
    
    //mouse y input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    //output x
    output.x.current = output.x.end - (input.mouseX.fraction * output.x.range);
    output.x.opposite = output.x.start + (input.mouseX.fraction * output.x.range); //does opposite
    //output.x.current = output.x.start + (input.mouseX.fraction * output.x.range); //follows mouse

    //output y
    output.y.current = output.y.end - (input.mouseY.fraction * output.y.range);
    output.y.opposite = output.y.start + (input.mouseX.fraction * output.x.range);

    // apply output to html
    pupilsArray.forEach(function(pupil, i){
       // pupil.style.transform = 'translateX(75px)'; static value
     

     if (i=== 0){
        pupil.style.transform = 'translate('+output.x.opposite+'px, '+output.y.current+'px)'
     }else{
        pupil.style.transform = 'translate('+output.x.current+'px, '+output.y.current+'px)'

     }
    

    });

   // console.log('output.x.current', output.x.current);
    //console.log('fraction Y' ,  input.mouseY.fraction);

}


var handleResize = function () {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

//event listerners
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);