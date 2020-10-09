document.querySelector("#tabs").addEventListener("click",fTabs);
function fTabs(evt){
    if(evt.target.className == "tabs-items"){
        
        let tabBody = document.getElementsByClassName("tabs-text-items");
        let tabs = document.getElementsByClassName("tabs-items");
        for(let i = 0;i < tabBody.length; i++){
            if(evt.target.dataset.tab == i ){
                tabs[i].classList.add("pseudo");
               
                tabBody[i].style.display = "flex";
               
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
    design: "<div class='hover'><a href='' class ='hover-link'><img src='img/icon.png' class = 'icon'><h2 class = 'hover-title'>creative design</h2><p class = 'hover-text'>Web Design</p></a></div>",
}


const loadMoreButton = document.querySelector(".our-amazing-btn");

loadMoreButton.addEventListener("click",(evt)=>{


    evt.preventDefault();
    loadMoreButton.style.display = "none";
    for(let i=5;i<=7;i++){

        container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items"  >${portfolioHover.web}<img src="filter/graphic-design/graphic-design${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);

        container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items"  >${portfolioHover.wordpress}<img src="filter/landing-page/landing-page${i}.jpg" alt=""  class="amazing-img" width="284"  height="220"></li>`);

        container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" >${portfolioHover.landing}<img src="filter/web-design/web-design${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);

        container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" >${portfolioHover.design}<img src="filter/wordpress/wordpress${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);
    }
});

for(let i=1;i<=4;i++){
    container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items"  >${portfolioHover.web}<img src="filter/graphic-design/graphic-design${i}.jpg" alt=""  class="amazing-img" width="284"  height="220"></li>`);
}
for(let i =1;i<4;i++){
    container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" >${portfolioHover.landing}<img src="filter/landing-page/landing-page${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);
}
for(let i =1;i<4;i++){
    container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items"  >${portfolioHover.design}<img src="filter/web-design/web-design${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);

}
for(let i =1;i<4;i++){
    container.insertAdjacentHTML("afterbegin",`<li class="our-amazing-block-items" >${portfolioHover.wordpress}<img src="filter/wordpress/wordpress${i}.jpg" alt=""  class="amazing-img"  width="284"  height="220"></li>`);

}


}

        const filterBox = document.querySelectorAll(".our-amazing-block-items");
            document.querySelector(".our-amazing-tabs-block").addEventListener("click", e => {
            if(e.target.tagName !== "LI"){
                return false;
            }
            let filterClass = e.target.dataset['q'];
            console.log(filterClass);
           
            filterBox.forEach(element=>{
                element.classList.remove("hide");
                if(!element.classList.contains(filterClass) && filterClass !== 'all'){
                   console.log(1);
                   element.classList.add("hide");
                           
                }
            });
        
            
        });
    



