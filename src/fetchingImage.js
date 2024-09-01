const image = document.querySelector("img");
fetch("https://jsonplaceholder.typicode.com/photos", {
  mode: "cors",
})
  .then((response) => response.json())
  .then((response) => {
    image.src = response[0].url;
  })
  .catch((error) => console.error(error));