import { Link } from "react-router-dom";
import FilterMovies from "../Filter/FilterMovies";

export default function BottomNavbar() {
  return (
    <div className="w-100 ">
      <ul className=" d-flex w-50 m-auto justify-content-around ">
        <Link to={"/"} className="text-decoration-none text-dark">
          <li className="list-group-item border-right  border-left border border-dark border-white px-3 mt-2  rounded-pill text-white">
            <b>Home</b>{" "}
          </li>
        </Link>
        <li className="list-group-item">
          <FilterMovies />
        </li>
      </ul>
    </div>
  );
}
