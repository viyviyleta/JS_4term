import React, { useState } from "react";
import { Link } from "react-router-dom";

const validateName = (name: string) => {
  if (name.length < 2 || name.length > 50) {
    return "The name must be between 2 and 50 characters long!";
  }
  if (!/^[a-zA-Zа-яА-Я\s-]*$/.test(name)) {
    return "The name should contain only letters and optional dashes!";
  }  
  return "";
};

const validateEmail = (email: string) => {
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return "Enter the correct email address!";
  }
  return "";
};

const validatePassword = (password: string, confirmPassword: string) => {
  if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
    return "The password must contain 8+ characters, uppercase and lowercase letters, and a number!";
  }
  if (password !== confirmPassword) {
    return "The passwords don't match!";
  }
  return "";
};

const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const nameError = validateName(name);
    if (nameError) {
      setError(nameError);
      return;
    }
  
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }
  
    const passwordError = validatePassword(password, confirmPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }
  
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
  
    const isEmailTaken = existingUsers.some((user: any) => user.email === email);
    if (isEmailTaken) {
      setError("A user with this email already exists!");
      return;
    }
  
    const newUser = { name, email, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  
    setError("");
    alert("Registration is successful!");
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      {error && <p className="error">{error}</p>}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <input type="password" placeholder="Confirm the password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      <button type="submit">Register</button>
      <div className="link-container">
      <Link to="/sign-in" className="link">Do you already have an account?/Enter</Link>
      </div>
    </form>
  );
};

export default SignUpForm;
