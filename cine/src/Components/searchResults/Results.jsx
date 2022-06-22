import { css } from "jquery";
import { Link } from "react-router-dom";
import CSS from "../../styles/frame-image.module.css";
export default function Results({ img, id }) {
  return (
    <Link to={`/movie/${id}`} className={`p-1`}>
      <img
        className={`image-grid p-2 border rounded mb-2 mt-2 ${CSS.frame_hover} ${CSS.box_shadow}`}
        src={`https://image.tmdb.org/t/p/w185/${img}  `}
        width="200"
      />
    </Link>
  );
}
