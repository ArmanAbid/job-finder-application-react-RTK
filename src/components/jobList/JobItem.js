import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ediableJob } from "../../features/editable/editableJobSlice";
import { deleteJobs } from "../../features/jobs/jobsSlice";

export default function JobItem({ job }) {
  const { title, type, salary, deadline ,id} = job || {};
  const dispatch = useDispatch()

  const handleDelete = () =>{
    dispatch(deleteJobs(id))
  }
  const handleEdit = () =>{
    dispatch(ediableJob(job))
  }



  let colorCode = "";

  if (type === "Full Time") {
    colorCode = "!text-[#FF8A00]";
  }
  if (type === "Internship") {
    colorCode = "!text-[#FF5757]";
  }
  if (type === "Remote") {
    colorCode = "!text-[#56E5C4]";
  }

  

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <i className={`fa-solid fa-stop ${colorCode} text-lg mr-1.5`}></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <Link to="/editjob">
            <button type="button" className="lws-edit btn btn-primary" onClick={handleEdit} >
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </button>
          </Link>
        </span>

        <span className="sm:ml-3">
          <button type="button" className="lws-delete btn btn-danger " onClick={handleDelete}>
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}
