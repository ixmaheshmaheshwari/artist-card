import artistsData from "./artist.js";
function createArtistCard(artist) {
  const card = document.createElement("div");
  card.classList.add("col-lg-4", "col-md-6", "col-sm-12", "mb-4");
  card.style = "width:15rem;"
  card.style = "height:auto;"

  card.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${artist.name}</h5>
        <p class="card-text"><strong>Birth Year: </strong>${artist.birthYear}</p>
        <p class="card-text"><strong>Country: </strong>${artist.country}</p>
        <p class="card-text"><strong>Genres: </strong>${artist.genres.join(", ")}</p>
        <p class="card-text"><strong>Hit Songs: </strong>${artist.hitSongs.join(", ")}</p>
        <p class="card-text"><strong>Description: </strong>${artist.description}</p>
      </div>
    </div>
  `;

  return card;
}
function NoArtistCardO(term) {
  const container = document.getElementById("rows");
  container.innerHTML = '';
  const card = document.createElement("div");
  card.classList.add("col-lg-4", "col-md-6", "col-sm-12", "mb-4");
  card.style = "width:15rem;"
  card.style = "height:15rem;"

  card.innerHTML = `
    <div class="card" style="height: 15rem;">
      <div class="card-body">
        <h5 class="card-title"><strong>No such Name found- ${term}</strong></h5>
        <p class="card-text">No record are found the searched Name-${term}. Please search for other Name</p>
      </div>
    </div>
  `;

  container.appendChild(card);
}
const debounce = (func, delay) => {
  let debounceTimer
  return function () {
      const context = this
      const args = arguments
      clearTimeout(debounceTimer)
      debounceTimer
          = setTimeout(() => func.apply(context, args), delay)
  }
}




function displayArtistCards(artistData) {
const container = document.getElementById("rows");
  container.innerHTML = '';

  for (const artist of artistData){
    const artistCard = createArtistCard(artist);
    container.appendChild(artistCard);
  }
}

function searchArtists() {
  const searchInput = document.getElementById("search");
  const searchTerm = searchInput.value.toLowerCase();
console.log("deb")
  const filteredArtists = artistsData.filter(artist => {
    const artistInfo = artist.name.toLowerCase();
    return artistInfo.includes(searchTerm);
  });
if(filteredArtists.length===0){
  NoArtistCardO(searchTerm);
}else{
  displayArtistCards(filteredArtists);
}
}
document.getElementById("search").addEventListener("input", debounce(searchArtists, 1500));


// document.getElementById("searchBtn").addEventListener("click", debounce(() => searchArtists));
document.addEventListener('DOMContentLoaded', () =>{
  displayArtistCards(artistsData);
});
