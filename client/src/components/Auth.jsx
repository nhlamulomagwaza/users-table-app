import '../styles/components/auth.scss';

function Auth() {
  return (
 <section className="auth">

<div className="auth-header">

<div className="auth-header-title">Sign In</div>
<p className="auth-header-caption">sign in with your credentianls to continue</p>


</div>
      <form  className="auth-form">


        <div className="form-fields">

            <input type="text" name="username" id="username" placeholder='username' />
        </div>
        <div className="form-fields">

            <input type="password" name="password" id="password" placeholder='password' />
        </div>


          <div className="form-submit">

            <button className="submit-form">Login</button>
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