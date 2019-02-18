import React, { Component } from 'react';
import ApplicationForm from './components/ApplicationForm';
import EditStudentForm from './components/EditStudentForm';

class App extends Component {
  state = {
    students: []
  };
  
  addStudent = (student) => {
    const newStudents = [...this.state.students];
    newStudents.push(student);
    this.setState({ students: newStudents });
  }

  startEditingStudent = (student) => {
    this.setState({ isEditingStudent: student })
  }

  editStudent = (student) => {
    const { students } = this.state;
    const index = students.findIndex((s) => s.id === student.id);
    students[index] = student;
    this.setState({ students, isEditingStudent: null });
  }

  deleteStudent = (id) => {
    const { students } = this.state;
    const index = students.findIndex((student) => student.id === id);
    students.splice(index, 1)
    this.setState({ students });
  }

  renderStudent = (student) => {
    let isActive = false;
    if (this.state.isEditingStudent) {
      isActive = this.state.isEditingStudent.id === student.id;
    }
    return (
      <li key={student.id}>
        { isActive
          ? <EditStudentForm editStudent={this.editStudent} student={student} />
          : `${student.firstName} ${student.lastName}`
        }
        <button onClick={() => this.startEditingStudent(student)}>edit</button>
        <button onClick={() => this.deleteStudent(student.id)}>delete</button>
      </li>
    )
  }

  render() {
    const { students } = this.state;
    const $students = students.map(this.renderStudent);

    return (
      <div className="App">
        <h1>HYF application form</h1>
        <ApplicationForm addStudent={this.addStudent} />
        <ul>
          {$students}
        </ul>
      </div>
    );
  }
}

export default App;
