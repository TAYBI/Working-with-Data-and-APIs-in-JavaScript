// fetch img
//*********************************************************** */

// fetch("github.jpeg")
//   .then((response) => {
//     console.log(response);
//     return response.blob();
//   })
//   .then((blob) => {
//     console.log(blob);

//     document.getElementById("img").src = URL.createObjectURL(blob); //
//   })
//   .catch((error) => {
//     console.log(error);
//   }); // handle errors

// **********************************************************************
// async await syntax

// async function catchImge() {
//   const response = await fetch("github.jpeg");
//   const blob = await response.blob();

//   document.getElementById("img").src = URL.createObjectURL(blob); //
// }

// catchImge().catch((error) => {
//   console.log(error);
// }); // handle errors

// fetch text
//*********************************************************** */

// async function catchText() {
//   const response = await fetch("lorem.txt");
//   const text = await response.text();

//   document.getElementById("parag").innerText = text;
// }

// catchText().catch((error) => {
//   console.log(error);
// });

// fetch array of imgs
//*********************************************************** */

async function catchImgs() {
  const imgs = ["github.jpeg", "git.jpeg", "netlify.jpeg"];
  for (let img of imgs) {
    const response = await fetch("./img/" + img);
    const blob = await response.blob();
    const image = document.createElement("img");
    image.src = URL.createObjectURL(blob);
    document.body.append(image);
  }

  //   console.log(array);
  //   document.getElementById("parag").innerText = text;
}

catchImgs();
