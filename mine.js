document.querySelector(".yes").onclick = function() {
    alert("https://vk.com/grandmother337")
}
document.querySelector(".no").onclick = function() {
    let img = document.createElement("img")
    let div = document.querySelector(".nodiv")
   img.setAttribute("src", "ZLkOD5qSkUk.jpg")
    div.appendChild(img)
    document.querySelector(".no").disabled = true
}
