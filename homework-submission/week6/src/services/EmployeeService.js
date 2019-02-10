var url = "https://reqres.in/api/users";
export default class EmployeeService {

  static getEmployeeList() {
    return fetch(url).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw response;
      }
    });
  }
}