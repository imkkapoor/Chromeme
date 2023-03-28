const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6d2b478femsh81f4f8c1d9e360bp10c78fjsn1564baa974ef",
    "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
  },
};

function getData(){
fetch("https://programming-memes-images.p.rapidapi.com/v1/memes", options)
  .then((response) => response.json())
  .then((response) => {
    const memeUrl = response[Math.floor((Math.random() * 11) + 1)].image;
    const memeElement = document.getElementById("meme");
    memeElement.src = memeUrl;
    
  })
  .catch((err) => console.error(err));
}

window.onload = getData();

var checkId = document.getElementById("meme");
if (checkId) {
  checkId.addEventListener("click", function (event) {
    checkId.src = "loading.gif";
    getData();
  });
}






