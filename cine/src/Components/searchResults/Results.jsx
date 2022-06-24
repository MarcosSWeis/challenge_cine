import { css } from "jquery";
import { Link } from "react-router-dom";
import CSS from "../../styles/frame-image.module.css";
export default function Results({ img, id }) {
  let imageOK;
  //   async function testImage(URL) {
  //     try {
  //       var tester = new Image();
  //       tester.onload = imageFound(URL);
  //       tester.onerror = imageNotFound;
  //       tester.src = URL;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   function imageFound(URL) {
  //     imageOK = URL;
  //   }

  //   function imageNotFound() {
  //     console.log(id, "NO ENCONTRADA");
  //   }

  // testImage(`https://image.tmdb.org/t/p/w185/${img}`);
  return (
    <Link to={`/movie/${id}`} className={`p-1`}>
      <img
        className={`image-grid p-2 border rounded mb-2 mt-2 ${CSS.frame_hover} ${CSS.box_shadow}`}
        src={`https://image.tmdb.org/t/p/w185/${img}`}
        onError={(event) => {
          console.log(event);
          const default_image = require("../../img/notFound_404/404_not_found_simpsons.gif");
          event.target.src = default_image;
          event.target.height = 291;
        }}
        width="200"
      />
    </Link>
  );
}
