document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".abutton");
  let body = document.querySelector("body");
  let newImage = document.createElement("IMG");
  let movieList;
  button.addEventListener("click", getDogs);

  function getDogs() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => {
        return res.json();
      })
      .then(parseRes => {
        let randDog = parseRes.message;

        newImage["src"] = randDog;
        body.appendChild(newImage);
      });
  }
});
