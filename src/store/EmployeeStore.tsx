import axios from "axios";
import { Store } from "pullstate";
import { DATA, Employee } from "../data/employees";

const EmployeeStore = new Store({
  employees: new Array<Employee>(),
});

export default EmployeeStore;

export const fetchEmployees = async (useApi: boolean) => {
  let employees = DATA;

  if (useApi) {
    axios
      .get(
        "https://randomuser.me/api/1.3/?results=2500&seed=809a1c1e796196f4&nat=us&noinfo"
      )
      .then((res) => {
        employees = res.data.results;
      });
  }

  EmployeeStore.update((s) => {
    s.employees = employees;
  });
};
