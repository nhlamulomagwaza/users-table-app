
import '../styles/components/userstable.scss'; 

function UserTable() {

    const users = [
        {
            id: 1, 
            name: 'John Smith',
            date_of_birth: '1999-05-18',
            occupation: 'Software Dev',
            gender: 'Male',
            date_added: '2025-01-01',
        },
        {
            id: 2,
            name: 'John Smith',
            date_of_birth: '1986-04-19',
            occupation: 'Technician',
            gender: 'Male',
            date_added: '2025-04-23',
        },
        {
            id: 3,
            name: 'Jane Doe',
            date_of_birth: '2000-10-17',
            occupation: 'Support Engineer',
            gender: 'Female',
            date_added: '2025-05-11',
        },
        {
            id: 4,
            name: 'Ben Jim',
            date_of_birth: '1981-11-24',
            occupation: 'Technician',
            gender: 'Male',
            date_added: '2025-12-30',
        },
    ];

   
    const onEdit = (user) => {
        console.log('Edit user:', user);
        alert(`Attempting to edit ${user.name}`);
      
    };

    const onDelete = (id) => {
        console.log('Delete user with ID:', id);
        alert(`Attempting to delete user ID: ${id}`);
 
    };

    if (!users || users.length === 0) {
        return <p className="no-records">No user records to display. Please add some users.</p>;
    }

    return (
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
                                <td data-label="Date of Birth">{new Date(user.date_of_birth).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td data-label="Occupation">{user.occupation}</td>
                                <td data-label="Gender">{user.gender}</td>
                                <td data-label="Date Added">{new Date(user.date_added).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td data-label="Actions" className="edits-column">
                                    <button
                                        onClick={() => onEdit(user)}
                                        className="edit-button"
                                        aria-label={`Edit ${user.name}`}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(user.id)}
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
            </div>
        </div>
    );
}

export default UserTable;