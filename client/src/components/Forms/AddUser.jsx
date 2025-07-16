import '../../styles/components/usersform.scss';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { usersTableContext } from '../../store/AppContext';


function AddUser() {
    const { addAUser } = useContext(usersTableContext); 
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [addUserForm, setAddUserForm] = useState({
        name: '',
        date_of_birth: '',
        occupation: '',
        gender: '',
        date_added: '',
    });

   
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setAddUserForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

 
    const handleSubmit = async (e) => {
        e.preventDefault();

     
        if (!addUserForm.name || !addUserForm.date_of_birth || !addUserForm.occupation || !addUserForm.gender || !addUserForm.date_added) {
            toast.error('Please fill in all fields.');
            return;
        }

        try {
            setLoading(true);
            await addAUser(addUserForm); 
            toast.success('User added successfully!');
        
        setAddUserForm({
                name: '',
                date_of_birth: '',
                occupation: '',
                gender: '',
                date_added: '',
            });
         
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error( error);
            toast.error('Failed to add user');
        } finally {
            setLoading(false);
        }
    };

    const backToUsers = () => {
        navigate('/');
    };

    return (
        <section className="user-form">
            <div className="user-form-container">
                <div className="users-forms">
                    <div className="users-forms-header">
                        <h1>Add New User</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="users-forms-fields">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='e.g., Nhlamulo Magwaza'
                                value={addUserForm.name}
                                onChange={handleFormChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date_of_birth">Date of Birth:</label>
                            <input
                                type="date"
                                name="date_of_birth"
                                id="date_of_birth"
                                value={addUserForm.date_of_birth}
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
                                value={addUserForm.occupation}
                                onChange={handleFormChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <select
                                name="gender"
                                id="gender"
                                value={addUserForm.gender}
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
                                value={addUserForm.date_added}
                                onChange={handleFormChange}
                            />
                        </div>

                       
                    </form>
                     <div className="users-forms-actions">
                            <button type="button" onClick={handleSubmit} className="add-user-button" >
                                {loading ? 'Adding...' : 'Add User'}
                            </button>
                            <button type="button" onClick={backToUsers} className="add-user-button">Back</button>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default AddUser;