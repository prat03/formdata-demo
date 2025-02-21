import { useState } from 'react'
import './App.css'

function App() {
  const [isSignUp, setIsSignUp] = useState(true); // Start with the signup form
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State for forgot password form
  
  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
    setShowForgotPassword(false); // Reset forgot password view when switching forms
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLoginClick = () => {
    setShowForgotPassword(false);
  };

  return (
    <div className="app-container">
      <div className="form-container">
      {showForgotPassword ? (
          <ForgotPasswordForm onBackToLogin={handleBackToLoginClick} />
        ) : isSignUp ? (
          <SignUpForm />
        ) : (
          <LoginForm onForgotPassword={handleForgotPasswordClick} />

        )}
        {!showForgotPassword && (
          <div className="toggle-form">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button onClick={handleToggleForm}>Login</button>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <button onClick={handleToggleForm}>Sign Up</button>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );

}

//singup page
function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here (e.g., API call)
    console.log('Signup submitted:', { username, email, password });
    //clear input field after submit
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Sign Up</h2>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(
e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    );
  }
  
  // login page
  function LoginForm({ onForgotPassword }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle login logic here (e.g., API call)
      console.log('Login submitted:', { email, password });
       //clear input field after submit
       setEmail('');
       setPassword('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="login-email">Email:</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot-password">
        <button type="button" onClick={onForgotPassword}>
          Forgot Password?
        </button>
      </div>
        <button type="submit">Login</button>
      </form>
  )
}

//forgetpassword page
function ForgotPasswordForm({ onBackToLogin }) {

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Forgot Password submitted:', { email });
    setEmail('');
    // Implement forgot password logic (e.g., send password reset email)
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Forgot Password</h2>
      <div className="input-group">
        <label htmlFor="forgot-email">Email:</label>
        <input
          type="email"
          id="forgot-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="forgot-password">
        <button type="button" onClick={onBackToLogin}>
          Back to Login
        </button>
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default App
