var pageNum = 0;


window.onload = function () {
    var mainEngArr = ["M", "a", "j", "e", "s", "t", "i", "c", '\u00A0', "T", "t", "e", "o", "k", "b", "o", "k", "k", "i"];
    var mainKorArr = ["위", "대", "한",'\u00A0', "떡", "볶", "이"];
    var maintxteng = document.querySelector(".maintxtEng");
    var maintxtkor = document.querySelector(".maintxtKor");
    var downBtn = document.getElementById("downBtn");
    console.log(downBtn)
    function addMainText(){
        for(var i = 0 ; i< mainEngArr.length ; i++){
            var divEng= document.createElement('div');
            var mainEngtxt = document.createTextNode(mainEngArr[i]);
            divEng.appendChild(mainEngtxt);
            maintxteng.appendChild(divEng);
            
        }
        for( var j =0; j<mainKorArr.length; j++){
            var divKor= document.createElement('div');
            var mainKortxt = document.createTextNode(mainKorArr[j]);
            divKor.appendChild(mainKortxt);
            maintxtkor.appendChild(divKor);
        }
    }

    addMainText();
    // console.log(downBtn);


    for (var i = 0; i < maintxteng.querySelectorAll('div').length; i++) {

        var _engtext = maintxteng.querySelectorAll('div')[i];

        TweenMax.from(_engtext, 1, {
            autoAlpha: 0,
            // scale:4,
            // rotate: Math.random()*360,
            delay: Math.random() * 1,
            ease: Power3.easeInOut
        });
    }

    for (var i = 0; i < maintxtkor.querySelectorAll('div').length; i++) {

        var _kortext = maintxtkor.querySelectorAll('div')[i];

        TweenMax.from(_kortext, 1, {
            autoAlpha: 0,
            // scale:4,
            // rotate: Math.random()*360,
            delay: Math.random() * 1,
            ease: Power3.easeInOut
        });
    }

}