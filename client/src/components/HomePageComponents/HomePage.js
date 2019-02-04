import React, { Component } from 'react';

import styled from 'styled-components';

const StudentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

// const StudentContainer = styled.div`
//   flex: 0 1 20%;
//   min-width: 200px;
//   height: 200px;
//   background-color: #f6f5f7;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23070607' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
//   border: 0;
//   border-radius: 3px;
//   box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
//     0 2px 4px rgba(0, 0, 0, 0.24);
//   cursor: pointer;
//   margin: 10px;
//   padding: 5px;
// `;

class Students extends Component {
  render() {
    return (
      <div>
        <h1>Student List</h1>
        <StudentContainer>
          {/* {this.props.students.map(student => {
            return (
              <StudentContainer>
                <Student
                  name={student.name}
                  id={student.id}
                  age={student.age}
                  height={student.height}
                  key={student.id}
                />
                <button onClick={() => this.props.delete(student.id)}>
                  Student
                </button>
              </StudentContainer>
            );
          })} */}
        </StudentContainer>
      </div>
    );
  }
}

// Student.defaultProps = {
//  students: [],
// };

export default Students;
