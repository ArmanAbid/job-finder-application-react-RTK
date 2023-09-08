import { Link } from "react-router-dom";

export default function AddJobBtn() {
  return (
    <li>
      <Link to={"/addjob"} className="main-menu" id="lws-addJob-menu">
        <i className="fa-solid fa-file-circle-plus"></i>
        <span>{" "}Add NewJob</span>
      </Link>
    </li>
  );
}
