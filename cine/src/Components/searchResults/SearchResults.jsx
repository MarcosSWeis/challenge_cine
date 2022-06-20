import { css } from "jquery";
import { Link } from "react-router-dom";
import CSS from "../../styles/frame-image.module.css";
export default function SearchResults({ img }) {
  return (
    <Link to={"#!"} className={`p-1`}>
      <img
        className={`image-grid p-2 border rounded mb-2 mt-2 ${CSS.frame_hover} ${CSS.box_shadow}`}
        src={`https://image.tmdb.org/t/p/w185/${img}  `}
        width="100"
      />

      {/* <div>
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{shortDesc}</p>
        </div> */}
    </Link>
  );
}
