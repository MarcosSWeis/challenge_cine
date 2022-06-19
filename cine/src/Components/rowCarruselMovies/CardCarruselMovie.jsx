export default function CardCarruselMovie({ title, img, description }) {
  let shortDesc;
  if (description.length > 120) {
    shortDesc = description.slice(0, 120);
  }

  return (
    <div class="movie" id="movie">
      <a href="">
        <img src={`https://image.tmdb.org/t/p/w185/${img} `} />

        {/* <div>
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{shortDesc}</p>
        </div> */}
      </a>
    </div>
  );
}
