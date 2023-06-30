let imgPage = document.querySelector(".imgPage"), imgs = document.querySelector(".imgs"), imgLogPage = document.querySelector(".imgLogPage")

imgPage.addEventListener('click', function(){
    imgPage.classList.toggle("imgPageToggle")
    imgs.classList.toggle("imgsToggle")
    if(imgLogPage.innerHTML === "Ochish"){
        imgLogPage.innerHTML = "Yopish"
    } else if(imgLogPage.innerHTML === "Yopish"){
        imgLogPage.innerHTML = "Ochish"
    }
})


let filePage = document.querySelector(".filePage"), files = document.querySelector(".files"), fileLogPage = document.querySelector(".fileLogPage")

filePage.addEventListener('click', function(){
    filePage.classList.toggle("filePageToggle")
    files.classList.toggle("filesToggle")
    if(fileLogPage.innerHTML === "Ochish"){
        fileLogPage.innerHTML = "Yopish"
    } else if(fileLogPage.innerHTML === "Yopish"){
        fileLogPage.innerHTML = "Ochish"
    }
})