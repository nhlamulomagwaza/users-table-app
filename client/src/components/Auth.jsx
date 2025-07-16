import { useContext } from 'react';
import { usersTableContext } from '../store/AppContext';
import '../styles/components/auth.scss';
import toast from 'react-hot-toast';
import { useState } from 'react';



function Auth() {

  const {setIsAuthenticated}= useContext(usersTableContext);


 const [username, setUsername]= useState('');
 const [password, setPassword]= useState('');

  const handleFormSubmit = (e)=>{

e.preventDefault();
    
    if(!username || !password){
      toast.error('Please fill in all fields');
      return;
    }



    if(username !== 'nhlamulo' || password !== 'testpassword'){
      toast.error('Invalid username or password');
      return;
    } else{
    
       setTimeout(() => {
       toast.success('Login successful');
        localStorage.setItem('isAuthenticated', 'true'); 
       setIsAuthenticated(true);



       }, 2000);
    }
   
  }
  return (
 <section className="auth">

<div className="auth-header">

<div className="auth-header-title">Sign In</div>
<p className="auth-header-caption">sign in with your credentianls to continue</p>


</div>
      <form  className="auth-form">


        <div className="form-fields">

            <input type="text" name="username" id="username" placeholder='username' value={username} 
            onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="form-fields">

            <input type="password" name="password" id="password" placeholder='password' value={password}
            onChange={(e)=>setPassword(e.target.value)} />
        </div>


          <div className="form-submit">

            <button className="submit-form" onClick={handleFormSubmit}>Login</button>
          </div>

      </form>


      <div className="auth-footer">

        <div className="auth-footer-demo-credentials">
            <h1>Demo Account</h1>
            <p>username: nhlamulo</p>
            <p>password: testpassword</p>
        </div>
      </div>
 </section>
  )
}

export default Auth