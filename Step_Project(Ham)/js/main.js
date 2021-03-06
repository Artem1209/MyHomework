$(document).ready(function(){

document.querySelector("#tabs").addEventListener("click",fTabs);
function fTabs(evt){
    if(evt.target.className == "tabs-items"){
        
        let tabBody = document.getElementsByClassName("tabs-text-items");
        let tabs = document.getElementsByClassName("tabs-items");
        for(let i = 0;i < tabBody.length; i++){
            if(evt.target.dataset.tab == i ){
                tabBody[i].style.display = "flex";
                tabs[i].classList.add("pseudo");
                
            }
             else{   
                tabs[i].classList.remove("pseudo");
                tabBody[i].style.display = "none";   
                
            }
        }
    }
};

loadMoreContent();
function loadMoreContent(){
const container = document.querySelector(".our-amazing-grid-block");

const portfolioHover = {
    web: "<div class='hover'><a href='' class ='hover-link'><img src='img/icon.png' class = 'icon'><h2 class = 'hover-title'>creative design</h2><p class = 'hover-text'>Web Design</p></a></div>",
    wordpress: "<div class='hover'><a href='' class ='hover-link'><img src='img/icon.png' class = 'icon'><h2 class = 'hover-title'>creative design</h2><p class = 'hover-text'>Web Design</p></a></div>",
    landing: "<div class='hover'><a href='' class ='hover-link'><img src='img/icon.png' class = 'icon'><h2 class = 'hover-title'>creative design</h2><p class = 'hover-text'>Web Design</p></a></div>",
    graphic: "<div class='hover'><a href='' class ='hover-link'><img src='img/icon.png' class = 'icon'><h2 class = 'hover-title'>creative design</h2><p class = 'hover-text'>Web Design</p></a></div>",
}


const loadMoreButton = document.querySelector(".our-amazing-btn");

loadMoreButton.addEventListener("click",(evt)=>{


    evt.preventDefault();
    loadMoreButton.style.display = "none";
    for(let i=5;i<=7;i++){

        container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" data-cat= 'graphic'  >${portfolioHover.graphic}<img src="filter/graphic-design/graphic-design${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);

        container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" data-cat = 'landing'  >${portfolioHover.landing}<img src="filter/landing-page/landing-page${i}.jpg" alt=""  class="amazing-img" width="284"  height="220"></li>`);

        container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" data-cat = 'web' >${portfolioHover.web}<img src="filter/web-design/web-design${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);

        container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" data-cat = 'wordpress' >${portfolioHover.wordpress}<img src="filter/wordpress/wordpress${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);
    }
});

for(let i=1;i<=4;i++){
    container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" data-cat = 'graphic'  >${portfolioHover.graphic}<img src="filter/graphic-design/graphic-design${i}.jpg" alt=""  class="amazing-img" width="284"  height="220"></li>`);

    container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" data-cat = 'landing'  >${portfolioHover.landing}<img src="filter/landing-page/landing-page${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);

    container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" data-cat = 'web'  >${portfolioHover.web}<img src="filter/web-design/web-design${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);


    container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" data-cat = 'wordpress' >${portfolioHover.wordpress}<img src="filter/wordpress/wordpress${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);
}



}

$(function(){
    let filter = $("[data-q]");
    filter.on("click",function(){

        let currentCat = $(".our-amazing-tabs");
       
        let cat = $(this).data("q");
        if(cat == "all"){
            $("[data-cat]").removeClass("hide");
        }
        else{
            $("[data-cat]").each(function(){
                let workCat = $(this).data("cat");
                if(workCat != cat){
                    $(this).addClass("hide");
                }
                else{
                    $(this).removeClass("hide");
                }
            });
        }
       
    });
});
 

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    centerPadding:"10px",
    slidesToScroll: 1,
    prevArrow: '<div class="prevbtn"><img src="img/slick-prev.png"></div>',
    nextArrow: '<div class="nextbtn"><img src="img/slick-prev.png"></div>',
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows:true
  });
 
 
  $('.grid').masonry({
   
    itemSelector: '.grid-item',
    columnWidth: 10,
    gutter: 21,
    fitWidth: true

  });



});
