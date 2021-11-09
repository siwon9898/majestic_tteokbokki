window.addEventListener("load", function () {
  var colorsWrap = document.querySelector(".colorsWrap")
  var colors_type = []
  var colors_palette = []
  var clr_images = [
    "clr_red",
    "clr_brown",
    "clr_orange",
    "clr_drkred",
    "clr_yellow",
    "clr_white",
    "clr_blue",
    "clr_black",
  ]

  var clr_txts = [
    "고추장",
    "궁중",
    "로제",
    "기름",
    "카레",
    "크림",
    "식욕감퇴",
    "짜장",
  ]

  var clr_stopBtn = document.querySelector(".clr_stopBtn")
  var clr_centerimg = document.querySelector(".clr_centerimg")
  var clr_centertxt = document.querySelector(".clr_centertxt")

  clr_stopBtn.addEventListener("click", function () {
    colorsWrap.classList.toggle("active")
    if (clr_stopBtn.value == "START") clr_stopBtn.value = "STOP"
    else clr_stopBtn.value = "START"
  })

  function className() {
    for (var i = 1; i < 9; i++) {
      colors_type.push(`color_${i}`)
    }
  }
  className()

  function clr_dotsAdder() {
    for (var i = 0; i < colors_type.length; i++) {
      var clr_addDots = document.createElement("div")
      colorsWrap.appendChild(clr_addDots)
    }
  }
  clr_dotsAdder()
  var clr_dots = document.querySelectorAll(".colorsWrap div")
  // console.log(clr_dots)
  function clr_classAdder() {
    for (var i = 0; i < colors_type.length; i++) {
      clr_dots[i].classList.add(colors_type[i])
    }
  }

  clr_classAdder()

  function clr_Ring() {
    for (var i = 0; i < clr_dots.length; i++) {
      clr_dots[i].style.transform =
        "translate(" +
        200 * Math.sin((i * Math.PI) / 4) +
        "%,-" +
        +200 * Math.cos((i * Math.PI) / 4) +
        "%)"
      if (3 <= i < 6) {
        clr_dots[i].style.transform =
          "translate(" +
          200 * Math.sin(((i - 2) * Math.PI) / 4) +
          "%," +
          200 * Math.cos(((i - 2) * Math.PI) / 4) +
          "%)"
      }
    }
  }
  setTimeout(function () {
    clr_Ring()
  }, 1000)

  clr_dots.forEach((one, index) =>
    one.addEventListener("mouseover", function () {
      colorsWrap.classList.add("active")
      one.classList.add("active")
      clr_stopBtn.value = "START"
      console.log(clr_centertxt)
      document.getElementsByTagName("h3")[0].innerHTML =
        clr_txts[index] + " 떡볶이"
      clr_centertxt.classList.add("active")
      clr_centerimg.classList.add("active")
      clr_centerimg.src = `/majestic_tteokbokki/image/${clr_images[index]}.png`

      const colorThief = new ColorThief()

      clr_centerimg.onload = function () {
        colors_palette = colorThief.getPalette(clr_centerimg)
        for (var i = 0; i < clr_dots.length; i++) {
          clr_dots[i].style.transition = "1s ease-in-out"
          clr_dots[i].style.background = "rgba(" + colors_palette[i] + ")"
        }
      }
    })
  )

  clr_dots.forEach((one) =>
    one.addEventListener("mouseout", function () {
      colorsWrap.classList.remove("active")
      one.classList.remove("active")
      one.style.background = "white"
      for (var i = 0; i < clr_dots.length; i++) {
        clr_dots[i].style.background = "white"
      }
      clr_stopBtn.value = "STOP"
      clr_centerimg.classList.remove("active")
      clr_centertxt.classList.remove("active")
    })
  )
})
