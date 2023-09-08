import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterByType } from "../../features/filters/filtersSlice";

export default function Filters() {
  const dispatch = useDispatch();

  const handleChange = (type) => {
    dispatch(filterByType(type));
  };
  return (
    <li>
      <Link
        to="/"
        className="main-menu menu-active"
        id="lws-alljobs-menu"
        onClick={() => handleChange("")}
      >
        <i className="fa-solid fa-briefcase"></i>
        <span> All Available Jobs</span>
      </Link>
      <ul className="space-y-6 lg:space-y-2 ">
        <li>
          <Link
            className="sub-menu"
            to="/jobs/internship"
            id="lws-internship-menu"
            onClick={() => handleChange("Internship")}
          >
            <i className="fa-solid fa-stop !text-[#FF5757]"></i> Internship
          </Link>
        </li>
        <li>
          <Link
            className="sub-menu"
            to="/jobs/fulltime"
            id="lws-fulltime-menu"
            onClick={() => handleChange("Full Time")}
          >
            <i className="fa-solid fa-stop !text-[#FF8A00]"></i> Full Time
          </Link>
        </li>
        <li>
          <Link
            className="sub-menu"
            to="/jobs/remote"
            id="lws-remote-menu"
            onClick={() => handleChange("Remote")}
          >
            <i className="fa-solid fa-stop !text-[#56E5C4]"></i> Remote
          </Link>
        </li>
      </ul>
    </li>
  );
}
