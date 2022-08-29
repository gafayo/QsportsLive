const articles = [
    {Img: "images/image-3.jpg",
    title: "FIFA World cup  2022",
    dsc: `Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Doloribus voluptatem cupiditate
      ut totam fuga praesentium?`,   
},
{Img: "images/image-3.jpg",
title: "Arab-African cup  2022",
dsc: `Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Doloribus voluptatem cupiditate
  ut totam fuga praesentium?`,   
},
{Img: "images/image-3.jpg",
title: "Arab-Qatar cup  2022",
dsc: `Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Doloribus voluptatem cupiditate
  ut totam fuga praesentium?`,   
},
{Img: "images/image-3.jpg",
title: "FIFA World cup  2022",
dsc: `Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Doloribus voluptatem cupiditate
  ut totam fuga praesentium?`,   
},
{Img: "images/image-3.jpg",
title: "Asian cup  2022",
dsc: `Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Doloribus voluptatem cupiditate
  ut totam fuga praesentium?`,   
},
{Img: "images/image-3.jpg",
title: "FootballDevelopment 2022",
dsc: `Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Doloribus voluptatem cupiditate
  ut totam fuga praesentium?`,   
}
];

const moreArticles = [
    {img: "images/img-6.jpg",
    dsc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum",
    title: "Football Development",
},
{img: "images/img-6.jpg",
    dsc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum",
    title: "Football Development",
},
{img: "images/img-6.jpg",
    dsc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum",
    title: "Football Development",
},
{img: "images/img-6.jpg",
    dsc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum",
    title: "Football Development",
},
{img: "images/img-6.jpg",
    dsc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum",
    title: "Football Development",
}
]
console.log(moreArticles)

// window eventlistener for calling article functions
window.addEventListener("DOMContentLoaded", ()=>{
    generateMainArticle(articles)
});


// ! A function for displaying main articles!!!!!
const currentNewsContainer = document.querySelector(".current-news")

let generateMainArticle = (items)=>{
    let itemsDisplay = items.map((x)=>{
        let {Img, dsc, title} = x;
        return x.innerHTML =  `
        <div class="item-container">
        <div class="latest-item">
            <div class="item-img">
                <img src="${Img}" alt="image">
            </div>
            <div class="item-dsc">
                <h3 class="item-title">${title}</h3>
                <p class="item-abt">${dsc}</p>
                <p class="item-date">20 Aug 2022</p>
            </div>
        </div>
    </div>`
    }).join(" ");
    currentNewsContainer.innerHTML = itemsDisplay;
}

// ! A function for generating more articles!!!!
const moreNewsContainer = document.querySelector(".more-news-container");
console.log(moreNewsContainer)

let generateMoreArticle = (items) => {
    let moreArticleDisplay = items.map((article)=>{
        return article.innerHTML=`
            <div class="more">
            <div class="more-item">
                <img src="images/img-1.jpg" alt="image">
                <div class="more-desc">
                    <h2>Football Development</h2>
                    <p class="more-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum 
                    </p>
                </div>
            </div>
            </div>`
    }).join("")
    moreNewsContainer.innerHTML = moreArticleDisplay;
}
generateMoreArticle(moreArticles)

 
 
 
// ! fixed-nav when the page is scrolled
const latestNewsTitle = document.querySelector(".latest-news");

window.addEventListener("scroll", function(){
    titleHeight = latestNewsTitle.getBoundingClientRect().height;
    
    newsContainerHeight = window.pageYOffset;

    if(newsContainerHeight > titleHeight){
        latestNewsTitle.classList.add("fixed-title")
    }else{
        latestNewsTitle.classList.remove("fixed-title")
    }
    
})