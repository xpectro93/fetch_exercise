document.addEventListener("DOMContentLoaded", () => {
  //need select
  let select = document.querySelector(".movies");

  //movie elements
  let title = document.querySelector("#title");
  let director = document.querySelector("#description");
  let description = document.querySelector("#description");
  let release = document.querySelector("#release");
  let rt = document.querySelector("#rt");

  let movieList;
  let masterop;
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(result => {
      return result.json();
    })
    .then(parseRes => {
      movieList = parseRes;

      for (let i = 0; i < movieList.length; i++) {
        let option = document.createElement("OPTION");
        // need to tag into array of obj keys with titles
        //populate select with keys
        option.innerText = movieList[i].title;
        option.setAttribute("value", [i]);
        option.setAttribute("class", [i]);
        select.appendChild(option);
        masterop = option;
      }
    });

  select.addEventListener("change", () => {
    title.innerText = movieList[select.value].title;
    director.innerText = movieList[select.value].director;
    description.innerText = movieList[select.value].description;
    release.innerText = movieList[select.value].release_date;
    rt.innerText = movieList[select.value].rt_score;
  });

  // select.addEventListener("change", () => {
  //   title.innerText = movieList[2].title;
  // });

  //
  // each this key is selected
  // key into the value
  //   title
  //   director
  //   description
  //   release date
  //   rt score is showed
  //
  // new film selected all above things change.
});
