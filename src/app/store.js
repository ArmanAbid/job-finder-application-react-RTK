import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from "../features/jobs/jobsSlice"
import filterReducer from "../features/filters/filtersSlice"
import editableReducer from "../features/editable/editableJobSlice"

export const store = configureStore({
  reducer: {
    jobs : jobsReducer,
    filters: filterReducer,
    edit: editableReducer
  },
});
