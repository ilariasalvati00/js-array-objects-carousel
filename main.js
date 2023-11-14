const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const img = document.getElementById("img");
img.style.backgroundImage = `url("${images[0].image}")`;

const img_description = document.getElementById("img-description");

const title = document.createElement("h1");
title.innerHTML = images[0].title;
img_description.appendChild(title);

const text = document.createElement("p");
text.innerHTML = images[0].text;
img_description.appendChild(text);


const sidebar = document.getElementById("sidebar");
images.forEach((element, index) => {
    const thumb = document.createElement("div")
    if (index == 0){
        thumb.classList.add("active");
    }
    sidebar.appendChild(thumb)
    thumb.style.height= `calc(100% / ${images.length})`;
    thumb.style.backgroundImage =  `url("${element.image}")`;
})

let imgActive = 0;


document.getElementById("down").addEventListener("click", function () {
    imgActive++;
    if(imgActive>images.length) {
        imgActive = 0;
    }
    img.style.backgroundImage = `url("${images[imgActive].image}")`;
    title.innerHTML = images[imgActive].title;
    text.innerHTML = images[imgActive].text;
});

document.getElementById("up").addEventListener("click", function () {
    imgActive--;
    if(imgActive<0) {
        imgActive = 5;
    }
    img.style.backgroundImage = `url("${images[imgActive].image}")`;
    title.innerHTML = images[imgActive].title;
    text.innerHTML = images[imgActive].text;
});




