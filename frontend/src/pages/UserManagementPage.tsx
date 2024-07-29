import * as React from 'react';
import UserForm from '../components/UserForm';
import './UserManagementPage.css';
import api from '../api/api';

interface User {
  id: string;
  username: string;
  email: string;
}

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-management-page">
      <h1>Manage Users</h1>
      {users.map(user => (
        <UserForm key={user.id} user={user} />
      ))}
      <UserForm />
    </div>
  );
};

export default UserManagementPage;
