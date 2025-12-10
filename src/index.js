import "./styles.css";

const buttons = document.querySelectorAll("[data-carousel-button]");
const dotsDiv = document.querySelector(".dots");

const slidesLength = document.querySelectorAll('.slide').length;


buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        const offset= button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-carousel]")
            .querySelector('[data-slides]');
        const activeSlide = slides.querySelector("[data-active");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0 ) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length ) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
        console.log("clicked");
        renderDots(newIndex,slides.children.length );

    })
})

const renderDots = (activeIndex, length) => {
    dotsDiv.innerHTML = ``;
    for(let i = 0; i < length; i ++) {
        if(i === activeIndex){
            const newSolidCircle = document.createElement("span");
            newSolidCircle.innerHTML = '&#9632';
            dotsDiv.appendChild(newSolidCircle);
        }
            
        else {
            const newCircle = document.createElement("span");
            newCircle.innerHTML = '&#9634';
            dotsDiv.appendChild(newCircle);
        }

    }
    
};

const renderEmptyDots = (length) => {
    dotsDiv.innerHTML = ``;
    for(let i = 0; i < length; i ++) {

        if(i === 0){
            const newSolidCircle = document.createElement("span");
            newSolidCircle.innerHTML = '&#9632';
            dotsDiv.appendChild(newSolidCircle);
        } else {

            const newCircle = document.createElement("span");
            newCircle.innerHTML = '&#9634';
            dotsDiv.appendChild(newCircle);
        }
    }
    
}

const clickNextButton = () => {
    buttons[1].click();

};

setInterval(clickNextButton, 5000);
renderEmptyDots(slidesLength);