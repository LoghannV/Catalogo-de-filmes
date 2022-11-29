//Declaracao das variaveis e constates
let btn_next = document.querySelectorAll('.carousel-box-next')
let btn_prev = document.querySelectorAll('.carousel-box-prev')
let CarouselOne = document.getElementById("CarouselOne")
let BoxGroup = document.querySelectorAll('.box-group')
let CardGroupCarousel = document.querySelector('.card-group-carousel')
let proximo = 0
let anterior = 400

let Cards = document.querySelectorAll('.card')

const cssGroupCard = window.getComputedStyle(CardGroupCarousel)


//Atribuição das funções
window.addEventListener('load',function(){

    /*let alturaCarouselOne = CarouselOne.style.top

    /*btn_next[0].style.top = alturaCarouselOne+"px"
    btn_prev[0].style.top = alturaCarouselOne+"px"
    btn_next[0].style.left = (window.innerWidth-100)+"px"
    btn_next[0].style.height = cssCarousel.height
    btn_prev[0].style.height = cssCarousel.height*/

    DimensionalButtonControl(btn_prev[0],btn_next[0],CarrouselOne)
    
    const CardGroupOne = DimensionalCards("#CarrouselOne")

    DimensionalCarrousel(BoxGroup[0],CarrouselOne)
 
})



btn_next[0].addEventListener('click',function(){
    ButtonNext(CardGroupOne,BoxGroup[0])
})



btn_prev[0].addEventListener('click',function(){ 
    if(proximo>=250){
        BoxGroup.scroll((proximo-anterior),0)
        proximo = proximo-anterior
    }else{
        BoxGroup.scroll(0,0)
    }
})

function DimensionalButtonControl(ButtonPrev,ButtonNext,Carrousel){
    let alturaCarouselOne = Carrousel.style.top
    const cssCarousel = window.getComputedStyle(Carousel)
        
    alert('passou aqui 1')
    ButtonNext.style.top = alturaCarouselOne+"px"
    ButtonPrev.style.top = alturaCarouselOne+"px"
    ButtonNext.style.left = (window.innerWidth-100)+"px"
    ButtonNext.style.height = cssCarousel.height
    ButtonPrev.style.height = cssCarousel.height
    
    alert('Realizado dimensionamento')
}
function DimensionalCards(CarrouselID){
    let CardGroup = document.querySelectorAll(CarrouselID+' .card').length

    CardGroupCarousel.style.width = Cards.length*260+"px"

    return CardGroup
}
function ButtonNextCarrousel(CardGroup,BoxGroup){
    proximo = window.innerWidth+proximo<=CardGroup.length*260? proximo+=250: 0
    BoxGroup.scroll(proximo,0)
}
function DimensionalCarrousel(Box,Carrousel){
    let alturaCarouselOne = Carrousel.style.top
    Box.style.top = alturaCarouselOne+"px"
    Box.style.width = this.window.innerWidth+"px"
}