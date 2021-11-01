
const cafes =[
    {name:`신촌 지점`, imgsrc:`img/cafe1.png`},
    {name:`종로 지점`, imgsrc:`img/cafe2.png`},
    {name:`김포 지점`, imgsrc:`img/cafe3.jpg`},
]

let selector = 0;

let prev = document.querySelector("#photo_prev");
let next = document.querySelector("#photo_next")
prev.addEventListener("click", prev_func, false);
next.addEventListener("click", next_func, false);

function prev_func(){
    if(selector==0) selector=2;
    else selector--;
    let slide = document.querySelector("#slide_photo");
    let store_name = document.querySelector("#store_name");
    slide.setAttribute("src",cafes[selector].imgsrc);
    store_name.innerHTML = cafes[selector].name;
}
function next_func(){
    if(selector==2) selector=0;
    else selector++;
    let slide = document.querySelector("#slide_photo");
    let store_name = document.querySelector("#store_name");
    slide.setAttribute("src",cafes[selector].imgsrc);
    store_name.innerHTML = cafes[selector].name;
}
