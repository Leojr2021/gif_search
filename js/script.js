
var input = document.getElementById("search_bar");

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("inputButton").click();
    }
});






function search() {
  let category = document.getElementById("search_bar").value;
  document.getElementById("search_bar").value = "";
  document.querySelector(".cards").innerHTML = "";

  requestURL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=SqtLnaigBIVNIHzSoKu7HIQecjZlrkn1`;

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const gifsImages = jsonObject["data"];
    //   console.table(jsonObject);
    //   console.table(gifsImages);
    if(gifsImages.length === 0){

        alert(`${category} is not a valid word, please enter another word`)
    }

    else{

        
        
      for (let i = 0; i < gifsImages.length; i++) {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");

        let image = document.createElement("img");

        h2.innerHTML = `${gifsImages[i].title} `;

        image.setAttribute("src", gifsImages[i].images.downsized_medium.url);

        card.append(h2);

        card.append(image);

        document.querySelector("div.cards").appendChild(card);
      }
    }
    });
}

