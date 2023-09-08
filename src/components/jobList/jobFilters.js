import { useDispatch, useSelector } from "react-redux";
import {filterBySearch, filterBySort} from "../../features/filters/filtersSlice"

export default function JobFilters() {
  const {sort} = useSelector(state => state.filters)
  const dispatch = useDispatch()
  const handleSort = (value)=>{
    dispatch(filterBySort(value))
  }
  const handleSearch = (value)=>{
    dispatch(filterBySearch(value))
  }
  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
            onChange = {(e)=>handleSearch(e.target.value)}
          />
        </div>
        <select
          id="lws-sort"
          name="sort"
          className="flex-1"
          value={sort}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option>Default</option>
          <option>Salary (Low to High)</option>
          <option>Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
}
