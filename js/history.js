window.onload = function () {
  var hs_section = document.getElementsByTagName("section")
  var hs_totalNum = hs_section.length
  var hs_pointWrap = document.querySelector(".pointWrap")
  var hs_pageNum = 0
  var hs_yearArr = ["1890", "1938", "1953", "1970", "1980", "1990", "2000"]
  var hs_displayNum = 0
  function hs_addPoints() {
    for (var i = 0; i < hs_totalNum; i++) {
      var hs_pointBtn = document.createElement("li")
      hs_pointWrap.appendChild(hs_pointBtn)
    }
  }
  var hs_year = document.querySelector(".hs_year")
  function hs_addYear() {
    for (var i = 0; i < hs_totalNum; i++) {
      var hs_addyear = document.createElement("p")
      var hs_years = document.createTextNode(hs_yearArr[i])
      hs_addyear.appendChild(hs_years)
      hs_year.appendChild(hs_addyear)
    }
  }

  hs_addPoints()
  hs_addYear()

  var hs_pointBtns = document.querySelectorAll(".pointWrap li")
  console.log(hs_pointBtns[0])

  for (var i = 0; i < hs_pointBtns.length; i++) {
    ;(function (idx) {
      hs_pointBtns[idx].onclick = function () {
        hs_pageNum = idx
        pageChangeFunc()
        pageChangeAni()
      }
    })(i)
  }

  function pageChangeAni() {
    TweenMax.to(window, 1, {
      scrollTo: {
        y: hs_section[hs_pageNum].offsetTop,
      },
      delay: 0.1,
      ease: Power4.easeInOut,
    })
  }

  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY
    for (var i = 0; i < hs_totalNum; i++) {
      if (
        scroll > hs_section[i].offsetTop - window.outerHeight / 1.5 &&
        scroll <
          hs_section[i].offsetTop -
            window.outerHeight / 1.5 +
            hs_section[i].offsetHeight
      ) {
        hs_pageNum = i
        hs_displayNum = i
        break
      }
    }
    pageChangeFunc()
  })

  var hs_yeartxt = document.querySelectorAll(".hs_year p")
  console.log(hs_yeartxt)
  function pageChangeFunc() {
    for (var i = 0; i < hs_totalNum; i++) {
      hs_pointBtns[i].classList.remove("active")
      hs_yeartxt[i].classList.remove("active")
    }

    hs_pointBtns[hs_displayNum].classList.add("active")
    hs_yeartxt[hs_displayNum].classList.add("active")
  }

  pageChangeFunc()
}
