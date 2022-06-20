import { Link } from "react-router-dom";
import FilterMovies from "../Filter/FilterMovies";

export default function BottomNavbar() {
  return (
    <div className="w-100 ">
      <ul className=" d-flex w-50 m-auto justify-content-around ">
        <Link to={"/"} className="text-decoration-none ">
          <li className="list-group-item">Home </li>
        </Link>
        <li className="list-group-item">
          <FilterMovies />
        </li>
      </ul>
    </div>
  );
}
