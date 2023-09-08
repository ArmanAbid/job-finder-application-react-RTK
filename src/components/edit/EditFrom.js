import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateJobs } from "../../features/jobs/jobsSlice";

export default function EditForm() {
  const {editablejob} = useSelector(state => state.edit)
  const navigate = useNavigate()
  const [titleInput, setTitleInput] = useState(editablejob.title);
  const [typeInput, setTypeInput] = useState(editablejob.type);
  const [salaryInput, setSalaryInput] = useState(editablejob.salary);
  const [deadlineInput, setDeadlineInput] = useState(editablejob.deadline);
  const dispatch = useDispatch()

  const reset = () => {
    setTitleInput("");
    setTypeInput("");
    setSalaryInput("");
    setDeadlineInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateJobs({
        title: titleInput,
        type: typeInput,
        salary: salaryInput,
        deadline: deadlineInput,
        id:editablejob.id
      })
    );
    navigate("/")
    reset();
  };

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="fieldContainer">
              <label
                for="lws-JobTitle"
                className="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              >
                <option value="" hidden >
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label for="lws-JobType">Job Type</label>
              <select
                id="lws-JobType"
                name="lwsJobType"
                required
                value={typeInput}
                onChange={(e) => setTypeInput(e.target.value)}
              >
                <option value="" hidden >
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label for="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  value={salaryInput}
                  onChange={(e) => setSalaryInput(e.target.value)}
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label for="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                value={deadlineInput}
                onChange={(e) => setDeadlineInput(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
