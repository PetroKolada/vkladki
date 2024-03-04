let tabList = document.querySelector("#tabList")
let contentList = document.querySelector("#contentList")

tabList.addEventListener("click", (event) =>{
    if (event.target.classList.contains("panel")){
        for (const x of tabList.children) {
            x.classList.remove("active")
        }
        event.target.classList.add("active")
        contentList.style.left = "-"+ ((Array.from(tabList.children).indexOf.call(Array.from(tabList.children), event.target) * 100)) + "%"
    }
})