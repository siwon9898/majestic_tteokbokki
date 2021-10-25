window.onload = function () {

  var hs_section = document.getElementsByTagName("section");
  var hs_totalNum = hs_section.length;
  var hs_pointWrap = document.querySelector(".pointWrap");
  var hs_pageNum = 0;
  // console.log(hs_totalNum);
  function hs_addPoints() {
    for (var i = 0; i < hs_totalNum; i++) {
      var hs_pointBtn = document.createElement("li");
      // var li_txt = document.createTextNode("앙뇽");

      // hs_pointBtn.innerHTML = i+1;
      hs_pointWrap.appendChild(hs_pointBtn);
      // hs_pointBtn.setAttribute("class","hs_pointBtn"+i);

    }
  }
  hs_addPoints();
  var hs_pointBtns = document.querySelectorAll(".pointWrap li");
  console.log(hs_pointBtns[0]);

  for (var i = 0; i < hs_pointBtns.length; i++) {
    (function (idx) {
      hs_pointBtns[idx].onclick = function () {
        hs_pageNum = idx;
        pageChangeFunc();
        window.scrollTo({
          top: hs_section[hs_pageNum].offsetTop,
          behavior: 'smooth',
        })
      }
    })(i);
  }
  // console.log(this)


  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
    for (var i = 0; i < hs_totalNum; i++) {
      if (scroll > hs_section[i].offsetTop - window.outerHeight / 1.5 && scroll < hs_section[i].offsetTop - window.outerHeight / 1.5 + hs_section[i].offsetHeight) {
        hs_pageNum = i;
        break;
      }
    }
    pageChangeFunc();
  });


  //페이지 변경
  function pageChangeFunc() {
    for (var i = 0; i < hs_totalNum; i++) {
      // hs_section[i].classList.remove("active");
      // section[i].className = "";
      hs_pointBtns[i].classList.remove("active");
    }
    // section[pageNum].classList.add("active");
    hs_pointBtns[hs_pageNum].classList.add("active");

  }


  //페이지 로드되면 바로 실행
  pageChangeFunc();








}