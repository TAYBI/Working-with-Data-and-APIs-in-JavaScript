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

async function catchImge() {
  const response = await fetch("github.jpeg");
  const blob = await response.blob();

  document.getElementById("img").src = URL.createObjectURL(blob); //
}

catchImge().catch((error) => {
  console.log(error);
}); // handle errors
