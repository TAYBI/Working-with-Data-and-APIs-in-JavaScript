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

async function catchText() {
  const response = await fetch("lorem.txt");
  const text = await response.text();

  document.getElementById("parag").innerText = text;
}

catchText().catch((error) => {
  console.log(error);
});
