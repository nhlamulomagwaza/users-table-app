import '../../styles/components/usersform.scss';
import { useContext, useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router'; 
import { usersTableContext } from '../../store/AppContext';

function EditUser() {

    const { selectedUser, updateAUser } = useContext(usersTableContext);
    const navigate = useNavigate(); 

  const [loading, setLoading] = useState(false);
    const [editForm, setEditForm] = useState({
         id: selectedUser?.id || '',
        name: '',
        date_of_birth: '',
        occupation: '',
        gender: '',
        date_added: '',
    });

   
    useEffect(() => {
        if (selectedUser) {
            setEditForm({
                id: selectedUser.id || '',
                name: selectedUser.name || '',
               
                date_of_birth: selectedUser.date_of_birth ? new Date(selectedUser.date_of_birth).toISOString().split('T')[0] : '',
                occupation: selectedUser.occupation || '',
                gender: selectedUser.gender || '',
                date_added: selectedUser.date_added ? new Date(selectedUser.date_added).toISOString().split('T')[0] : '',
            });
        }
    }, [selectedUser]);

  
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (!selectedUser || !selectedUser.id) {
            toast.error('No user selected to update');
            return;
        }

        try {
         setLoading(true);
            await updateAUser(selectedUser.id, editForm);
            toast.success('User updated successfully!');
            setTimeout(() => {
                navigate('/'); 
            }, 2000)
          
        } catch (error) {
            console.error(error);
            toast.error('Failed to update user');
        }finally {
            setLoading(false);
        }
    };

   
    const backToUsers = () => {
        navigate('/'); 
    };

    if (!selectedUser) {
        return (
            <section className="user-form">
                <div className="user-form-container">
                    <div className="users-forms">
                        <div className="users-forms-header">
                            <h1>No User Selected</h1>
                        </div>
                        <p>Please select a user from the table to edit</p>
                        <div className="users-forms-actions">
                            <button type="button" style={{marginTop: '2rem'}} onClick={backToUsers} className="add-user-button">Back to Users</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="user-form">
            <div className="user-form-container">
                <div className="users-forms">
                    <div className="users-forms-header">
                        <h1>Update User</h1>
                    </div>

                    <form onSubmit={handleSubmitForm} className="users-forms-fields">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='e.g., Nhlamulo Magwaza'
                                value={editForm.name}
                                onChange={handleFormChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date_of_birth">Date of Birth:</label>
                            <input
                                type="date"
                                name="date_of_birth"
                                id="date_of_birth"
                                value={editForm.date_of_birth}
                                onChange={handleFormChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="occupation">Occupation:</label>
                            <input
                                type="text"
                                name="occupation"
                                id="occupation"
                                placeholder='e.g., Fullstack Dev'
                                value={editForm.occupation}
                                onChange={handleFormChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <select
                                name="gender"
                                id="gender"
                                value={editForm.gender}
                                onChange={handleFormChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="date_added">Date Added:</label>
                            <input
                                type="date"
                                name="date_added"
                                id="date_added"
                                value={editForm.date_added}
                                onChange={handleFormChange}
                            />
                        </div>

                       
                    </form>
                     <div className="users-forms-actions">
                            <button type="button" className="add-user-button" onClick={handleSubmitForm}>{loading ? 'Updating...' : 'Update User'}</button>
                            <button type="button" onClick={backToUsers} className="add-user-button">Back</button>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default EditUser;