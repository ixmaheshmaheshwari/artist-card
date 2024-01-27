import artistsData from "./artist.js";
function createArtistCard(artist) {
  const card = document.createElement("div");
  card.classList.add("col-lg-4", "col-md-6", "col-sm-12", "mb-4");
  card.style="width:15rem;"
  card.style="height:auto;"

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

function displayArtistCards(artistData) {
  const container = document.getElementById("rows");
  container.innerHTML = ''; 

  for (const artist of artistData) {
    const artistCard = createArtistCard(artist);
    container.appendChild(artistCard);
  }
}

function searchArtists() {
  const searchInput = document.getElementById("search");
  const searchTerm = searchInput.value.toLowerCase();
  console.log(searchTerm, typeof searchTerm)

  const filteredArtists = artistsData.filter(artist => {
    const artistInfo = Object.values(artist).join(" ").toLowerCase();
    console.log(artistInfo, typeof artistInfo)
    return artistInfo.includes(searchTerm);
  });

  displayArtistCards(filteredArtists);
}
document.getElementById("searchBtn").addEventListener("click",searchArtists);
document.getElementById("search").addEventListener("input",searchArtists);
displayArtistCards(artistsData);