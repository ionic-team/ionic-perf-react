import { createSelector } from "reselect";

const getState = (state) => state;

//  General getters
export const getEmployees = createSelector(
  getState,
  (state) => state.employees
);

//	Specific getters
export const getEmployee = (uuid) =>
  createSelector(
    getState,
    (state) => state.employees.filter((q) => q.login.uuid === uuid)[0]
  );
