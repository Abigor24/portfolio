let menu = document.querySelector(".header__menu");
let dropMenu = document.querySelector(".header__drom-menu");
menu.addEventListener("click", function () {
    menu.classList.toggle("active");
    dropMenu.classList.toggle("active");
});

let  numberPercent = document.querySelectorAll('.countbar')
let getPercent = Array.from(numberPercent)

getPercent.map((items) => {
    let startCount = 0
    let progressBar = () => {
        startCount ++
        items.innerHTML = `<h3>${startCount}%</h3>`
        items.style.width = `${startCount}%`
        if(startCount == items.dataset.percentnumber) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        progressBar()
    },15)
});