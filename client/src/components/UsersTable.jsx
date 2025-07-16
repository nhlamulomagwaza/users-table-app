
import '../styles/components/userstable.scss'; 
import { useContext } from 'react';
import {  usersTableContext } from '../store/AppContext';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { OrbitProgress } from 'react-loading-indicators';
import { useNavigate } from 'react-router';

function UserTable() {
    const { getUsers, setSelectedUser, deleteAUser} = useContext(usersTableContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

     const deleteUser = async (userId) => {
      
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                        setLoading(true); 
      
                await deleteAUser(userId);
                toast.success('User deleted successfully!');

              
                fetchAllUsers();
            } catch (err) {
                console.error( err);
                toast.error('Error deleting user');
            } finally {
                setLoading(false); 
            }
        }
    };

    const handleEdit = (user) => {
         setSelectedUser(user)
        navigate('/user/edit')
    }

  const fetchAllUsers = async () => {
    setLoading(true);
    
        try {
            const data = await getUsers();
               console.log(data)
            setUsers(data);
         
        } catch (err) {
             toast.error('Error fetching users');
             console.log(err);
        } finally {
            setLoading(false);
        }
    };

  
useEffect(() => {
    fetchAllUsers(); 

    const intervalId = setInterval(() => {
        fetchAllUsers();
    }, 120000); 

    return () => clearInterval(intervalId); 
}, [deleteAUser,deleteUser]);
   
   


/* if (!users || users.length === 0) {
    return <p className="no-records">No user records to display. Please add some users.</p>;
}
   */

    return (
        <>
        {loading ?
    <div className='loading' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
        <OrbitProgress size='medium' color='#fff'  />
        
        </div>
        : (

        <div className="users-table">
      {/*       <h2 className="users-table-header">Postgres Records</h2> */}
            <div className="table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Occupation</th>
                            <th>Gender</th>
                            <th>Date Added</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td data-label="Name">{user.name}</td>
                                <td data-label="Date of Birth">{new Date(user.date_of_birth).
                                toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td data-label="Occupation">{user.occupation}</td>
                                <td data-label="Gender">{user.gender}</td>
                                <td data-label="Date Added">{new Date(user.date_added).
                                toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td data-label="Actions" className="edits-column">
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="edit-button"
                                        aria-label={`Edit ${user.name}`}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className="delete-button"
                                        aria-label={`Delete ${user.name}`}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='add-user' onClick={() => navigate('/user/add')}>Add A User</button>
            </div>
        </div> )}
         </>
    );
   
}

export default UserTable;