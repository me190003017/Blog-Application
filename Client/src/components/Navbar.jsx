import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";
// import { useState } from "react";
const Navbar = () => {
  const {currentUser,logout} =useContext(AuthContext);
  // const [err, setError] = useState(null);
  const navigate=useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (err) {
      // setError(err.response.data);
      console.log(err.response.data);
    }
  };
  return (
    <div className="navbar">
      <div className="container">
          <div className="logo">
            <Link to="/">
            <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="links">

            <Link className="link" to="/?cat=technology">
              <h6>TECH</h6>
            </Link>
            <Link className="link" to="/?cat=cinema">
              <h6>CINEMA</h6>
            </Link>
            <Link className="link" to="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className="link" to="/?cat=food">
              <h6>FOOD</h6>
            </Link>
            <Link className="link" to="/?cat=travel">
              <h6>TRAVEL</h6>
            </Link>
            <Link className="link" to="/?cat=science">
              <h6>SCIENCE</h6>
            </Link>
            <Link className="link" to="/?cat=design">
              <h6>DESIGN</h6>
            </Link>
            <Link className="link" to="/?cat=cinema">
              <h6>CINEMA</h6>
            </Link>
            <Link className="link" to={`/?user=${currentUser?.username}`}>
            <span>{currentUser?.username}</span>
            </Link>
            {/* <span>{currentUser?.username}</span> */}
            {currentUser ? <span onClick={handleLogout}>Logout</span> : <Link className="link" to={'/login'}>Login</Link>}
            <span className="write">
              <Link className="link" to={"/write"}>Post</Link>
            </span>
          </div>
      </div>
    </div>
  )
}

export default Navbar