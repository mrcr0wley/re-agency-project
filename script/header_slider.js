window.onload = function  () {
    initSlider();
};
function initSlider(){
    let slides = document.querySelectorAll('#header__slides .slide');
    let currentSlide = 0;
    setInterval(nextSlide, 10000);

    function nextSlide() {
        slides[currentSlide].className = "slide";
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = "slide showing";
    }
}




// let serviceType = document.getElementById("service__type");
//
// serviceType.onclick = function () {
//     document.getElementById("service__type-window").style.display="block";
// };