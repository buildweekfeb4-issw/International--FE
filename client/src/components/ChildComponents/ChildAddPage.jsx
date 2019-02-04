import React from 'react';

const ChildAddPage = props => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input />
      </div>
      <div>
        <label>Age</label>
        <input />
      </div>
      <div>
        <label>School status</label>
        <select>
          <option disabled defaultValue='' />
          <option>Student</option>
          <option>Past student</option>
          <option>Visitor</option>
        </select>
      </div>
      <div>
        <label>Insurance card</label>
        <input type='check' />
      </div>
      <div>
          <label>Insurance expiration date</label>
          <input/>
      </div>
      <div>
        <label>Birthday certificate</label>
        <input/>
      </div>
      <div>
        <label>Special needs</label>
        <input/>
      </div>
      <div>
        <label>Child's representative</label>
        <input/>
      </div>
      <div>
        <label>Contact Info</label>
        <input/>
      </div>
    </form>
  );
};

export default ChildAddPage;
