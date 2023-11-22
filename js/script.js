(function () {
  "use strict";
  const debounce = function debounce(fn, delay) {
    let timoutID;
    let args;
    return function () {
      for (let _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
      timoutID && clearTimeout(timoutID);
      timoutID = setTimeout(function () {
        fn.apply(undefined, args);
      }, delay);
    };
  };

  // const boxes = document.querySelectorAll('.box')
  // const observer = new window.IntersectionObserver((entries, observer) => {
  //   entries.forEach(entry => {
  //     console.log('300')
  //     const er = entry
  //     debounce(e=>er.target.style.display = 'block', 3000)(e)

  //     // entry.target.removeAttribute('loading')
  //   })
  // })
  // boxes.forEach(box => observer.observe(box))

  function ready(fn) {
    document.readyState !== "loading"
      ? fn()
      : document.addEventListener
      ? document.addEventListener("DOMContentLoaded", fn)
      : document.attachEvent("onreadystatechange", function () {
          document.readyState !== "loading" && fn();
        });
  }
  ready(function () {
    const themeSwitch = document.querySelector("#themesw");
    themeSwitch.checked = window.localStorage.getItem("theme7") === "true" || window.matchMedia("(prefers-color-scheme:dark)").matches;
    themeSwitch.addEventListener("change", (e) => (e.currentTarget.checked ? window.localStorage.setItem("theme7", "true") : window.localStorage.removeItem("theme7")));

    // const resource = document.createElement('link')
    // resource.setAttribute('rel', 'stylesheet')
    // resource.setAttribute('href', 'https://fonts.googleapis.com/css?family=K2D:400,400i&amp;subset=latin-ext&display=swap')
    // resource.setAttribute('type', 'text/css')
    // document.getElementsByTagName('head')[0].appendChild(resource)

    // const link = document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']") : document.createElement('link')
    // link.setAttribute('rel', 'canonical')
    // link.setAttribute('href', location.protocol + '//' + location.host + location.pathname)
    // document.head.appendChild(link)

    const ext1 = document.createElement("script");
    ext1.setAttribute("src", "./js/appinstall.min.js");
    ext1.setAttribute("defer", "defer");
    document.head.appendChild(ext1);

    const ext2 = document.createElement("script");
    ext2.setAttribute("src", "./js/imgs.min.js");
    ext2.setAttribute("defer", "defer");
    document.head.appendChild(ext2);

    const ext3 = document.createElement("script");
    ext3.setAttribute("src", "./js/gall7.min.js");
    ext3.setAttribute("defer", "defer");
    document.head.appendChild(ext3);

    const col1 = document.getElementById("leftcolumn");
    const col2 = document.getElementById("rightcolumn");
    const box1 = Array.from(col1.getElementsByClassName("box"));
    const box2 = Array.from(col2.getElementsByClassName("box"));

    const shuflleElems = (elem) =>
      elem
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    const setOrder = (elem) => elem.forEach((item, index) => (item.style.order = index));

    setOrder(shuflleElems(box1));
    setOrder(shuflleElems(box2));
    // shuffle div end

    const allcon = document.getElementsByClassName("wrp")[0];
    const header = document.getElementsByTagName("header")[0];
    const menus = document.getElementsByClassName("exp");
    // header.addEventListener('click', function (e) {
    //   e.preventDefault()
    //   document.getElementsByClassName('classgrid')[0].classList.toggle('animations-togle')
    //   e.currentTarget.style.animationState = 'paused'
    //   return false
    // })
    function menu(e) {
      if (e.target.className !== "act" && ((menus.length > 0 && e.target.getAttribute("aria-label") !== "button") || document.documentElement.offsetWidth > 481)) {
        document.getElementsByClassName("act").length && document.getElementsByClassName("act")[0].classList.remove("act");
      }
      if (e.target.getAttribute("aria-label") === "button") {
        e.preventDefault();
        e.target.classList.toggle("act");
        document.getElementsByClassName("wraper")[0].scrollTop = menus[0].parentElement.scrollHeight;
      }
    }

    setTimeout(function () {
      document.getElementById("spiner").style.display = "none";
      document.getElementsByClassName("wraper")[0].style.display = "block";
    }, 1000);

    document.addEventListener("click", menu.bind(this));
    // document.querySelectorAll('a').forEach(e => e.addEventListener('dragstart', e => e.preventDefault()))
    allcon.addEventListener(
      "scroll",
      debounce(function () {
        allcon.scrollTop > 9 && allcon.offsetWidth > 480 ? header.classList.add("zero") : header.classList.remove("zero");
      }, 9)
    );

    if (document.addEventListener) {
      document.addEventListener(
        "contextmenu",
        function (e) {
          e.preventDefault();
        },
        false
      );
    } else {
      document.attachEvent("oncontextmenu", function (e) {
        e.preventDefault();
        return false;
      });
    }
  });
})();
