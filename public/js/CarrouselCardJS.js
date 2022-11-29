//Declaracao das variaveis e constates
let btn_next = document.querySelectorAll('.carousel-box-next')
let btn_prev = document.querySelectorAll('.carousel-box-prev')
let CarouselOne = document.getElementById("CarouselOne")
let CarouselTwo = document.getElementById("CarouselTwo")
let BoxGroup = document.querySelectorAll('.box-group')
let CardGroupCarouselAll = document.querySelectorAll('.card-group-carousel')
let anterior = 400

let Cards = document.querySelectorAll('.card')




//Atribuição das funções
window.addEventListener('load',function(){
    
    DimensionalButtonControl(btn_prev[0],btn_next[0],CarouselOne)
    DimensionalCards("#CarouselOne",CardGroupCarouselAll[0])
    DimensionalCarousel(BoxGroup[0],CarouselOne)

    DimensionalButtonControl(btn_prev[1],btn_next[1],CarouselTwo)
    DimensionalCards('#CarouselTwo',CardGroupCarouselAll[1])
    DimensionalCarousel(BoxGroup[1],CarouselTwo)
 
})
//BUTTON CARROUSEL ONE
btn_next[0].addEventListener('click',function(){
    ButtonNextCarousel("#CarouselOne",BoxGroup[0],this)
})
btn_prev[0].addEventListener('click',function(){ 
    ButtonPrevCarousel("#CarouselOne",BoxGroup[0],this)
})

//BUTON CAROUSEL TWO
btn_next[1].addEventListener('click',function(){
    ButtonNextCarousel("#CarouselTwo",BoxGroup[1],this)
})
btn_prev[1].addEventListener('click',function(){ 
    ButtonPrevCarousel("#CarouselTwo",BoxGroup[1],this)
})


//FUNÇÕES

function DimensionalButtonControl(ButtonPrev,ButtonNext,Carousel){
    let alturaCarouselOne = Carousel.style.top
    const cssCarousel = window.getComputedStyle(Carousel)

    ButtonNext.style.top = alturaCarouselOne+"px"
    ButtonPrev.style.top = alturaCarouselOne+"px"
    ButtonNext.style.left = (window.innerWidth-100)+"px"
    ButtonNext.style.height = cssCarousel.height
    ButtonPrev.style.height = cssCarousel.height
}
function DimensionalCards(CarouselID,GroupCard){
    let CardGroup = document.querySelectorAll(CarouselID+' .card').length
    GroupCard.style.width = CardGroup*260+"px"

    
}
function ButtonNextCarousel(CarouselID,BoxGroup,Button){
    let CardGroup = document.querySelectorAll(CarouselID+' .card').length
    let DataNext = Button.getAttribute('data-next')
    if(window.innerWidth+parseInt(DataNext)<=CardGroup*260){
        BoxGroup.scroll(DataNext,0)
        Button.setAttribute('data-next',parseInt(DataNext)+400)
    }else{
        BoxGroup.scroll(0,0)
        Button.setAttribute('data-next',400)
    }

}
function ButtonPrevCarousel(CarouselID,BoxGroup,Button){
  
    let DataNext = parseInt(document.querySelectorAll(CarouselID+" .carousel-box-next")[0].getAttribute('data-next'))
    let DataPrev = Button.getAttribute('data-prev')
    if(DataNext>400){
        if(DataNext-DataPrev == 400){
            BoxGroup.scroll(0,0)
                    
         }else{
            DataNext =DataNext-parseInt(DataPrev)
            document.querySelectorAll(CarouselID+" .carousel-box-next")[0].setAttribute('data-next', DataNext)
            BoxGroup.scroll(DataNext,0)
            
        }
    }else{
    
        BoxGroup.scroll(0,0)
    }

}
function DimensionalCarousel(Box,Carousel){
    let alturaCarouselOne = Carousel.style.top
    Box.style.top = alturaCarouselOne+"px"
    Box.style.width = this.window.innerWidth+"px"
}