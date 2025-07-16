import React from 'react'
import toast from 'react-hot-toast';
import { useState , useEffect} from 'react';
export const usersTableContext= React.createContext();
function AppContext({children}) {
//let contextTest= 'test';


const API_URL =  'http://localhost:3000/api/users';



const authCredentials = () => {
 
    const username = 'nhlamulo';
    const password = 'testpassword';
    return {
        'username': username,
        'password': password,
        'Content-Type': 'application/json' 
    };
};



 const getUsers = async () => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'GET',
            headers: authCredentials() 
        });

        if (!response.ok) {
          toast.error('Error fetching users');
            return [];
        }
   const data = await response.json();
        return data;
       
    } catch (error) {
     
        console.error( error);
        throw error; 
    }
};


 const getAUser = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'GET',
            headers: authCredentials()
        });

        if (!response.ok) {
            toast.error('Could not get a user');
        }

  
    } catch (error) {
        console.error( error);
        throw error;
    }
};


 const addAUser = async (userObject) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: authCredentials(),
            body: JSON.stringify(userObject) 
        });

        if (!response.ok) {
                toast.error('Could not create a user');
        }

           } catch (error) {
        console.error( error);
        throw error;
    }
};


 const updateAUser = async (id, userData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: authCredentials(),
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
         return  toast.error('Could not update a user');
        }


    } catch (error) {
        console.error(error);
        throw error;
    }
};


 const deleteAUser = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: authCredentials()
        });

        if (!response.ok) {
        return toast.error('Could not delete a user');
        }

     
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const [selectedUser, setSelectedUser] = useState(null); 
 const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
    );
   useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated.toString());
    }, [isAuthenticated]);

  return (
    <usersTableContext.Provider value={{getUsers, getAUser, addAUser,
     updateAUser, deleteAUser,
     selectedUser, setSelectedUser, isAuthenticated, setIsAuthenticated}}>
        {children}
    </usersTableContext.Provider>
  )
}

export default AppContext