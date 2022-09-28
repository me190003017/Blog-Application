import React ,{useState,useContext}from 'react'
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input required name='username' type="text" placeholder='username' onChange={handleChange} />
        <input required name='password' type="text" placeholder='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span > Don't you have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login
