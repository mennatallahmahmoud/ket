let navbarToggler = document.querySelector(".navbar .navbar-toggler");
let navbarTogglerSpans = Array.from(document.querySelectorAll(".navbar .navbar-toggler span"));
let navbarNav = document.querySelector(".navbar .navbar-collapse");
let headerItems = Array.from(document.querySelectorAll(".navbar .navbar-nav li > a"));
let timelineItems = Array.from(document.querySelectorAll(".services .timeline .box .desc button"));
let portfolioNav = Array.from(document.querySelectorAll(".portfolio .menu > ul > li"));
let portfolioImgs = Array.from(document.querySelectorAll(".portfolio .menu .portfolio-imgs .box"));
let news = Array.from(document.querySelectorAll(".news .main-box .news-titles .title button"));

navbarToggler.addEventListener("click", function() {
    navbarTogglerSpans[0].classList.toggle("disappear");
    navbarTogglerSpans[1].classList.toggle("disappear");
});

headerItems.forEach((i) => {
    i.addEventListener("click", function() {
        navbarTogglerSpans[0].classList.toggle("disappear");
        navbarTogglerSpans[1].classList.toggle("disappear");
        navbarNav.classList.toggle("show");
    });
    i.addEventListener("click", function() {
        headerItems.forEach((item) => {
            item.classList.remove("active");
        })
        this.classList.add("active");
    });
});

timelineItems.forEach((i) => {
    i.onclick = function() {
        window.location.assign("index.html#about")
    }
});

portfolioNav.forEach((i) => {
    i.addEventListener("click", function() {
        portfolioNav.forEach((item) => {
            item.classList.remove("active");
        })
        this.classList.add("active");
        portfolioImgs.forEach((img) => {
            if (i.dataset.sector === "all") {
                img.style.display = "block";
            } else if (i.dataset.sector === img.dataset.sector) {
                img.style.display = "block";
            } else if (i.dataset.sector !== img.dataset.sector) {
                img.style.display = "none";
            }
        })
    })
});

news.forEach((i) => {
    i.onclick = function() {
        window.location.assign("index.html#clients-reviews")
    }
})

document.querySelector("footer .copyright span:first-child").innerHTML = new Date().getFullYear();