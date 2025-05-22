import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const generateRandomPassword = () => {
    return Math.random().toString(36).slice(-8); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const storedUsers = localStorage.getItem("users");
  
    if (!storedUsers) {
      setError("No registered users.");
      return;
    }
  
    const users = JSON.parse(storedUsers);
  
    const userIndex = users.findIndex((u: { email: string }) => u.email === email);
  
    if (userIndex === -1) {
      setError("User with this email was not found.");
      return;
    }
  
    const newPassword = generateRandomPassword();
  
    users[userIndex] = { ...users[userIndex], password: newPassword };
  
    localStorage.setItem("users", JSON.stringify(users));
  
    setMessage(`New password for ${email}: ${newPassword}`);
    setError("");
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Password Recovery</h2>
      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Reset password</button>
      <div className="link-container">
        <Link to="/sign-in" className="link">Go back</Link>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
