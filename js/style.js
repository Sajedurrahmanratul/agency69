function toggler() {
    const toggler = document.querySelector(".toggle");
    const ul = document.querySelector(".menu");
    const cross = document.querySelector(".cross");

    toggler.addEventListener("click", () => {
        ul.classList.add("show");

    })

    cross.addEventListener("click", () => {
        ul.classList.remove("show");
    })
}

toggler()

function search() {
    const search = document.querySelector(".search");
    const wrong = document.querySelector(".wrong");
    const searchBtn = document.querySelector(".searchBtn");

    searchBtn.addEventListener("click", () => {
        search.classList.add("showSearch");
    })

    wrong.addEventListener("click", () => {
        search.classList.remove("showSearch")
    })
}

search()