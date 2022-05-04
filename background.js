const images = ["1.JPG","2.JPG","3.jpeg","4.JPG","5.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img")
bgImage.src = `js/images/${chosenImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);