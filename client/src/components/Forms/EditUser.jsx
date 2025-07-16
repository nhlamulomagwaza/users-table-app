

import '../../styles/components/usersform.scss';

function EditUser() {
    return (
        <section className="user-form">
            <div className="user-form-container">
                <div className="users-forms">
                    <div className="users-forms-header">
                        <h1>Update User</h1>
                    </div>

                    <div className="users-forms-fields">
                   
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" placeholder='e.g., Nhlamulo Magwaza' />
                        </div>

                   
                        <div className="form-group">
                            <label htmlFor="date_of_birth">Date of Birth:</label>
                            <input type="date" name="date_of_birth" id="date_of_birth" />
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="occupation">Occupation:</label>
                            <input type="text" name="occupation" id="occupation" placeholder='e.g., Fullstack Dev' />
                        </div>

                   
                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <select name="gender" id="gender">
                                <option value="">Select Gender</option> 
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              
                            </select>
                        </div>
                       
                         <div className="form-group">
                            <label htmlFor="date_added">Date Added:</label>
                            <input type="date" name="date_added" id="date_added" />
                        </div>
                    </div>

                    <div className="users-forms-actions">
                        <button type="submit" className="add-user-button">Update User</button>
                        <button type="submit" className="add-user-button">Back</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditUser;