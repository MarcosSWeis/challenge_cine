import ReactPlayer from "react-player";
import CSS from "../../Components/Filter/filter.module.css";

export default function Detail({
  title,
  genres,
  description,
  release_date,
  videos,
  vote_average,
  poster_path,
}) {
  let url;
  if (videos.length !== 0) {
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].site == "YouTube") {
        if (videos[i].key && videos[i].key != "") {
          url = `https://www.youtube.com/watch?v=${videos[i].key}`;
        }
      }
    }
  } else {
    url = `https://image.tmdb.org/t/p/w185/${poster_path}`;
  }
  const posibleRates = [2, 4, 6, 8, 10];

  return (
    <div className="w-100 pt-3 shadow  shadow-lg shadow-sm rounded p-2 ">
      {videos.length !== 0 ? (
        <div className="w-100 m-auto ">
          <ReactPlayer
            url={url}
            width="100%"
            playing //se reproduce automático
            volume="0.8"
          />
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <img src={url} width="200" className="" />
        </div>
      )}
      <div className="mt-3">
        <div className="d-flex justify-content-between px-3">
          <h2>{title}</h2>

          <h6 className="mt-3 mx-3">
            Fecha de estreno <b>{release_date}</b>
          </h6>
          <div className="">
            <h6>Calificación</h6>
            {posibleRates.map((rate) => (
              <i
                class={
                  `bi bi-star-fill ` +
                  (rate <= vote_average ? ` ${CSS.in_rate} ` : "")
                }
              ></i>
            ))}
          </div>
        </div>

        <div className="d-flex mt-3  px-3  ">
          <h5>Generos</h5>

          <ul className="d-flex ">
            {genres.map((genre) => (
              <em>
                <li className="mx-2 list-group-item ">{genre.name}</li>
              </em>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-3 ">
        <h3>Descripción</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
