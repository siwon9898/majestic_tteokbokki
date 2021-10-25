window.addEventListener('load', function () {

    
    var section = document.getElementsByTagName("section");
    var totalNum = section.length;
    var pg2_imgWrap = document.querySelector(".pg2_imgWrap");
    var halmae1 = document.querySelector(".halmae_1");
    var halmae2 = document.querySelector(".halmae_2");
    var highlight = document.querySelector(".pg2_highlight");

    var pg2mainArr = ["항", "상", "\u00A0", "그", "\u00A0", "곳", "에", "있","었","다","."];
//    var d = document.querySelector(".arrowdown")
// console.log(d)
    // console.log(downBtn)
    var pg2main = document.querySelector(".pg2_main");

    
    downBtn.addEventListener("click", function(){
        console.log("before pageNum"+pageNum)
        pageNum++;
        window.scrollTo({
            top:section[pageNum].offsetTop,
            behavior:'smooth',
        });
        console.log("after pageNum"+pageNum)
        // console.log(totalNum);
    });

    
  

    function addMainText() {
        if(pg2main.querySelectorAll('div').length == 0) {
            for (var i = 0; i < pg2mainArr.length; i++) {
                var pg2div = document.createElement('div');
                if(i == 7){
                    pg2main.appendChild(document.createElement('br'));
                }
                var pg2Text = document.createTextNode(pg2mainArr[i]);
                pg2div.appendChild(pg2Text);
                pg2main.appendChild(pg2div);
    
            }
    
            for (var i = 0; i < pg2main.querySelectorAll('div').length; i++) {
                var _pg2maintxt = pg2main.querySelectorAll('div')[i];
        
                TweenMax.from(_pg2maintxt, 0.5, {
                    autoAlpha: 0,
                    delay: Math.random() * 1,
                    ease: Power3.easeInOut
                });
            }
        }
    }

  

    window.addEventListener('scroll', function(event){
        
        var scroll = this.scrollY;

        for(var i =0; i<totalNum; i++){
            if(scroll > section[i].offsetTop - window.outerHeight/3 && scroll < section[i].offsetTop - window.outerHeight/3 + section[i].offsetHeight){
                pageNum = i;
                break;
            }
        }
       
         if (pageNum ==1){
            addMainText();

            pg2_imgWrap.classList.remove("before");
            pg2_imgWrap.classList.add("active");

            halmae1.classList.remove("before");
            halmae1.classList.add("active");
            
            halmae2.classList.remove("before");
            halmae2.classList.add("active");

            highlight.classList.remove("before");
            highlight.classList.add("active");

    
        } else {
            halmae1.classList.remove("active");
            halmae1.classList.add("before");

            halmae2.classList.remove("active");
            halmae2.classList.add("before");

            pg2_imgWrap.classList.remove("active");
            pg2_imgWrap.classList.add("before");

            highlight.classList.remove("active");
            highlight.classList.add("before");
        }
        if (pageNum == totalNum-1){
            downBtn.style.display ="none";
        } else {
            downBtn.style.display ="initial";
        }

    })

    



    
   
})