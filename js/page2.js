var section = document.getElementsByTagName("section");
// var section2 = document.getElementsByClassName("page2");
// console.log(section[1].offsetTop)
// var offsetT = section2[1].offsetTop;
if(this.scrollY == section[1].offsetTop) {
    var pg2mainArr = ["항","상","\u00A0","그","\u00A0","곳","에","\u00A0","있","었","다","."];
    var pg2main = document.querySelector(".pg2_main");

    function addMainText(){
        for(var i = 0 ; i<pg2mainArr.length ; i++){
            var pg2div= document.createElement('div');
            var pg2Text = document.createTextNode(pg2mainArr[i]);
            pg2div.appendChild(pg2Text);
            pg2main.appendChild(pg2div);
            
        }
    }

    addMainText();

    for(var i=0; i<pg2main.querySelectorAll('div').length; i++){
        var _pg2maintxt =  pg2main.querySelectorAll('div')[i];
        
        TweenMax.from(_pg2maintxt, 1, {
            autoAlpha: 0,
            // scale:4,
            // rotate: Math.random()*360,
            delay: Math.random() * 1,
            ease: Power3.easeInOut
        });
    }

}

// if(wi)
// window.addEventListener("scroll", function(event){
//     var pg2mainArr = ["항","상","\u00A0","그","\u00A0","곳","에","\u00A0","있","었","다","."];
//     var pg2main = document.querySelector(".pg2_main");

//     function addMainText(){
//         for(var i = 0 ; i<pg2mainArr.length ; i++){
//             var pg2div= document.createElement('div');
//             var pg2Text = document.createTextNode(pg2mainArr[i]);
//             pg2div.appendChild(pg2Text);
//             pg2main.appendChild(pg2div);
            
//         }
//     }

//     addMainText();

//     for(var i=0; i<pg2main.querySelectorAll('div').length; i++){
//         var _pg2maintxt =  pg2main.querySelectorAll('div')[i];
        
//         TweenMax.from(_pg2maintxt, 1, {
//             autoAlpha: 0,
//             // scale:4,
//             // rotate: Math.random()*360,
//             delay: Math.random() * 1,
//             ease: Power3.easeInOut
//         });
//     }

// }
// )