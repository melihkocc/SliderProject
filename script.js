const imgs = [
    {
        "id" : 0,
        "url" : "https://picsum.photos/id/237/700/400"
    },
    {
        "id" : 1,
        "url" : "https://picsum.photos/id/100/700/400"
    },
    {
        "id" : 2,
        "url" : "https://picsum.photos/id/200/700/400"
    },
    {
        "id" : 3,
        "url" : "https://picsum.photos/id/300/700/400"
    },
    {
        "id" : 4,
        "url" : "https://picsum.photos/id/400/700/400"
    },
    {
        "id" : 5,
        "url" : "https://picsum.photos/id/450/700/400"
    },
]


const img = document.querySelector(".image")
const card = document.querySelector("#card")
const nextButton = document.querySelector(".next")
const prevButton = document.querySelector(".prev")
let number = 1;


nextButton.addEventListener("click",()=>{
    number++;
    clickButton();
})
prevButton.addEventListener("click",()=>{
    number--;
    clickButton();
})
function clickButton(){
    if(number>imgs.length){
        number=1;
    }
    if(number<1){
        number=imgs.length;
    }
    img.src = imgs[number-1].url
}