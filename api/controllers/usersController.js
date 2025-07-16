const db= require('../Models/DatabaseConnection');



const getUsers= async (req, res) => {
   try {

        const users = await db.query('SELECT * FROM users ORDER BY id');
    
        res.status(200).json(users.rows);
    } catch (error) {
        console.error( error.message);
        res.status(500).json({ message: 'Internal Server error, could not retrieve users' });
    }
};

const getAUser= async (req, res) => {
     const { id } = req.params; 
    try {
              const user = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        if (!user.rows.length) {
    
            return res.status(404).json({ message: `No user found with ID: ${id}`});
        }
        res.status(200).json(user.rows[0]); 
    } catch (error) {
        console.error( error.message);
        res.status(500).json({ message: `Could not fetch user with ID: ${id}` });
    }
}



const addUser= async (req, res) => {

    const { name, date_of_birth, occupation, gender } = req.body;


     if (!name || !date_of_birth || !occupation || !gender) {
        return res.status(400).json({ message: 'name, date_of_birth, occupation, gender are required fields' });
    }
  
    try {
     
        const newUser= await db.query(
            'INSERT INTO users (name, date_of_birth, occupation, gender) VALUES ($1, $2, $3, $4) RETURNING id, name, date_of_birth, occupation, gender, date_added',
         
            [name, date_of_birth, occupation, gender]
        );
        res.status(201).json({
            message: 'A user has been added succsesfully',
       
            newUser: newUser.rows[0]
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server error, could not add user' });
    }
}


const updateUser= async (req, res) => {
  const { id } = req.params; 
    const { name, date_of_birth, occupation, gender } = req.body; 
    try {
      
        const user = await db.query(
            'UPDATE users SET name = $1, date_of_birth = $2, occupation = $3, gender = $4 WHERE id = $5',
            [name, date_of_birth, occupation, gender, id]
        );
  
        if (user.rowCount === 0) {
      
            return res.status(404).json({ message: `User ${id} did not return any records` });
        }
        res.status(200).json({ message: ` User has been updated ` });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: `Failed to update user`});
    }
    
}


const deleteUser= async (req, res) => {
     const { id } = req.params; 
    try {
   
        const query = await db.query('DELETE FROM users WHERE id = $1', [id]);
        if (query.rowCount === 0) {
         
            return res.status(404).json({ message: `User with ID ${id} not found.` });
        }
        res.status(200).json({ message: `User has been deleted` });
    } catch (error) {
     
        res.status(500).json({ message: `Internal Server error, failed to delete user` });
    }
}

module.exports= { getUsers, getAUser, addUser, updateUser, deleteUser };
