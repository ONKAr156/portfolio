import { modeBtn, shareBtn } from "./constant.js"



modeBtn.addEventListener("click", () => {
    const h = document.querySelector("html")
    if (h.hasAttribute('data-bs-theme')) {
        h.removeAttribute("data-bs-theme")
        modeBtn.innerHTML = `<i
                    class="bi bi-sun"></i>`
        modeBtn.classList.remove("btn-dark")
        modeBtn.classList.add("btn-lght")
    } else {
        h.setAttribute("data-bs-theme", "dark")
        modeBtn.innerHTML = `<i
                    class="bi bi-moon"></i>`
        modeBtn.classList.remove("btn-light")
        modeBtn.classList.add("btn-dark")
    }



})

shareBtn.addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: "Awesome PWA camera App",
            text: "Switch, capture,share Moments",
            url: "https://onkar156.github.io/Camera-opration/"
        })
    } else {

    }
})