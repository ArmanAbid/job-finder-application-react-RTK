import AddJobBtn from "./AddJobBtn";
import Filters from "./FIlters";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <Filters/>
          <AddJobBtn/>
        </ul>
      </nav>
    </div>
  );
}
