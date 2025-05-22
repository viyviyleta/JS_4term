import React, {useState} from "react";
import { Link } from "react-router-dom";

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
      
        const storedUsers = localStorage.getItem('users'); 
      
        if (storedUsers) {
            const users = JSON.parse(storedUsers); // это массив пользователей
        
            const foundUser = users.find(
              (user: { email: string; password: string }) =>
                user.email === email && user.password === password
            );
        
            if (foundUser) {
              alert("Authorization is successful!");
            } else {
              setError("Incorrect email or password!");
            }
          } else {
            setError("No users registered!");
          }
      };
      

       return(
        <form onSubmit={handleSubmit}>
            <h2>Log in</h2>
            {error && <p className="error">{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit">Log in</button>
            <div className="link-container">
            <Link to="/sign-up" className="link1">Registration</Link>
            <Link to="/reset-password" className="link">Forgot password?</Link>
            </div>
        </form>
       );
    };

export default SignInForm;