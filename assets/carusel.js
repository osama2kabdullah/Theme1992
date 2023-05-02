const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const banners = document.getElementsByClassName('banner');
let currentSlide = 0;

banners[1].style.display = "none";
banners[2].style.display = "none";

plusBtn.addEventListener('click', function(){
    if(currentSlide === 2){
        currentSlide = 0;
    }else {
        currentSlide = currentSlide + 1;
    }
    slide(currentSlide);
})
minusBtn.addEventListener('click', function(){
    if(currentSlide === 0){
        currentSlide = 2
    }else {
        currentSlide = currentSlide -1
    }
    slide(currentSlide);
})

function slide(index) {
    for (let i = 0; i < banners.length; i++) {
        const element = banners[i];
        if(index === i){
            element.style.display = "block";
            console.log(element);
        }else {
            element.style.display = "none";
        }
    }
}