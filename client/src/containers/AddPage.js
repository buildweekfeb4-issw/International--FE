import React from 'react';

import StudentInfoForm from '../components/StudentInfoForm';

const AddPage = props => {
  return (
    <>
      <h2>New Student</h2>
      <StudentInfoForm method='POST' id={null} />
    </>
  );
};
export default AddPage;