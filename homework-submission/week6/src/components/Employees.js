import React from 'react';
import EmployeeService from '../services/EmployeeService';

export default class Employees extends React.Component {

  state = {
    employeeList: []
  }

  componentDidMount() {
    EmployeeService.getEmployeeList()
      .then(employeeList => {
        this.setState({ employeeList: employeeList.data })
        console.log(this.state.employeeList);
      }).catch(err => { console.log("ERROR:", err) });
  }

  render() {
    let employeeBlock = [];
    if (this.state.employeeList.length > 0) {
      employeeBlock = this.state.employeeList.map((employee, index) => {
        return (
          <div key={index}>
            <h1>{employee.first_name} {employee.last_name}</h1>
            <img src={employee.avatar}></img>
          </div>
        )
      })


    }
    return (
      <div>
        <h1>Employee List</h1>
        <div>{employeeBlock}</div>
      </div>
    );
  }
}