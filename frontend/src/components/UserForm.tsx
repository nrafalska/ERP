import React from 'react';
import './UserForm.css';

const UserForm: React.FC<{ user?: any }> = ({ user }) => {
  return (
    <form className="user-form">
      <label>
        Username
        <input type="text" defaultValue={user?.username || ''} />
      </label>
      <label>
        Email
        <input type="email" defaultValue={user?.email || ''} />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
