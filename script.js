
// const arr=[{text:"tahirova"},{text: "aysel"}]

// localStorage.setItem("todo", JSON.stringify(arr))

// setLocalStorage("todo",arr)
// console.log(getLocalStorage("todo"));

// function setLocalStorage(key, arr) {
//     localStorage.setItem(key, JSON.stringify(arr))
// }

// function getLocalStorage(key) {
//     return JSON.parse(localStorage.getItem(key))
// }


const faq=document.querySelectorAll(".faq");
faq.forEach((element)=>{
    element.addEventListener("click",function(){
        element.classList.toggle("active")
    })
})

