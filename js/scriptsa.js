(function () {
    "use strict";
    var resource = document.createElement('link');
    resource.setAttribute("rel", "stylesheet");
    resource.setAttribute("href", "https://fonts.googleapis.com/css?family=K2D:400,400i&amp;subset=latin-ext");
    resource.setAttribute("type", "text/css");
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(resource);

    var debounce = function debounce(fn, delay) {
        var timoutID;
        return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            timoutID && clearTimeout(timoutID), timoutID = setTimeout((function () {
                fn.apply(void 0, args);
            }), delay);
        };
    };

    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function () {
                if (document.readyState != 'loading')
                    fn();
            });
        }
    }


    ready(function () {
        var allcon = document.getElementsByClassName("wrp")[0];
        var header = document.getElementsByTagName("header")[0];
        var menus = document.getElementsByClassName("exp");
        setTimeout(function () {
            document.getElementById("spiner").style.display = "none";
        }, 1000);
        function menu(e) {
            if (e.target.className !== "act" && (e.target.getAttribute('role') !== "button" || document.documentElement.offsetWidth > 481 && menus.length > 0)) {
                // for (var i = menus.length - 1; i >= 0; i--) {
                let elems = document.getElementsByClassName("act");
                if (elems.length) document.getElementsByClassName("act")[0].classList.remove("act");
                // }
            }

            if (e.target.getAttribute('role') === "button") {
                e.preventDefault();
                e.target.classList.toggle("act");
                document.getElementsByClassName("wraper")[0].scrollTop = menus[0].parentElement.scrollHeight;
            }

        }
        document.addEventListener("click", debounce(function (e) {
            menu(e);
        }, 50));


        allcon.addEventListener("scroll", debounce(function () {
            if (allcon.scrollTop > 48 && 480 < allcon.offsetWidth) {
                header.classList.add("zero");
            } else {
                header.classList.remove("zero");
            }
        }, 100));

        if (document.addEventListener) {
            document.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            }, false);
        } else {
            document.attachEvent('oncontextmenu', function () {
                window.event.returnValue = false;
            });
        }
        // function hasNetwork(online) {
        //     if (online) {
        //         let elem = document.createElement("div");
        //         let cret = document.createTextNode("Online");
        //         elem.appendChild(cret);
        //         header.appendChild(elem);

        //     } else {
        //         let elem = document.createElement("div");
        //         let cret = document.createTextNode("Offline");
        //         elem.appendChild(cret);
        //         header.appendChild(elem);
        //     }
        // }

        // window.addEventListener("load", () => {
        //     hasNetwork(navigator.onLine);
        //     window.addEventListener("online", () => {
        //         hasNetwork(true);
        //     });

        //     window.addEventListener("offline", () => {
        //         hasNetwork(false);
        //     });
        // });

        // function processAjaxData(response, url) {
        //     elsm.innerHTML = response.html;
        //     document.title = response.Title;
        //     window.history.pushState({ "html": response.html, "Title": response.Title }, "", url);
        // }
        // processAjaxData(indexs.html, ok);

    });
})();