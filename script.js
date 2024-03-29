"use strict";

axios
  .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(function (response) {
    console.log(response);

    document.getElementById("title").innerHTML = response.data.title;
    document.getElementById("explanation").innerHTML =
      response.data.explanation;
    document.getElementById("date").innerHTML = response.data.date;

    if (response.data.hdurl === "String") {
      document.getElementById("astro-image").src = response.data.hdurl;
    }

    if (response.data.url === "String") {
      document.getElementById("astro-video").src = response.data.url;
    }
  });
