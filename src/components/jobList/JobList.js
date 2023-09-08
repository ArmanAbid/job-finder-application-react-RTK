import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobs/jobsSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import JobFilters from "./jobFilters";
import JobItem from "./JobItem";

export default function JobList() {
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );
  const { jobType, search, sort } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  //rendering Jobs
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  //filter By search
  const searchFilter = (job) => {
    return job.title.toLowerCase().includes(search.toLowerCase());
  };
  //filter By Sort
  const sortFilter = (maxValue, currentValue) => {
    switch (sort) {
      case "Salary (Low to High)":
        return maxValue.salary - currentValue.salary;
      case "Salary (High to Low)":
        return currentValue.salary - maxValue.salary;
      default:
        return;
    }
  };
  //filter by type
  const jobTypeFilter = (job) => {
    switch (jobType) {
      case "Internship":
        return job.type === "Internship"
      case "Full Time":
        return job.type === "Full Time"
      case "Remote":
        return job.type === "Remote"
      default:
        return job;
    }
  };

  //content
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Error error={error} />;
  if (!isLoading && !isError && jobs?.length <= 0) {
    content = <div>No Jobs Found</div>;
  }
  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs
      .filter(searchFilter)
      .sort(sortFilter)
      .filter(jobTypeFilter)
      .map((job) => (
        <div className="jobs-list" key={job.id}>
          <JobItem job={job} />
        </div>
      ));
  }

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <JobFilters />
        {content}
      </main>
    </div>
  );
}
