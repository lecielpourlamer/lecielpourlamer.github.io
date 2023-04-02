const images = ["chicago.jpg", "la.jpg", "flower.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;

// const colors = [
//     "#ef5777",
//     "#575fcf",
//     "#4bcffa",
//     "#34e7e4",
//     "#0be881",
//     "#f53b57",
//     "#3c40c6",
//     "#0fbcf9",
//     "#00d8d6",
//     "#05c46b",
//     "#ffc048",
//     "#ffdd59",
//     "#ff5e57",
//     "#d2dae2",
//     "#485460",
//     "#ffa801",
//     "#ffd32a",
//     "#ff3f34"
//   ];

//   const giveMeColorBtn = document.querySelector("#giveMeColorBtn");
  
//   function setGradientColoredBg() {
//         const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
//         const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
//         //const randomColor3 = colors[Math.floor(Math.random() * colors.length)];
//         const backgroundImage = `linear-gradient(to left, ${randomColor1}, ${randomColor2})`;

//         if(randomColor1 === randomColor2) {
//             return setGradientColoredBg();
//         }

//         document.body.style.backgroundImage = backgroundImage;
//   }
  
//   giveMeColorBtn.addEventListener("click", setGradientColoredBg);