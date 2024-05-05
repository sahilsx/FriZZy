import React, { useState } from "react";
import "../styles/Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  

  const handleImage = (e) => {
    const file = e.target.files[0]; // selected files in the array of files
    const Reader = new FileReader(); //  creating instance of fileReader   // inheritance
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("image", image);
      const res = await axios.post(
        "http://localhost:4000/user/register",
        formData
      );

      if (res.data.message === "Registration Succesful") {
        setMessage("User created SuccesFully!");
        // Form Sanitization
        setUsername("")
        setEmail("")
        setPassword("")
        setImage(null)

        navigate("/login");
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      setMessage("Network Error ");
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <h1> Register</h1>

        <form>
        <label>Profile Image
        <img src={image} alt="no-text" width={100} />

            <input
              type="file"
              placeholder="Upload Pic "
              name="image"
              accept="image/*"
              onChange={handleImage}
            />
      </label>
           
          <label>
            Username
            <input
              type="text"
              name="username" //key
              placeholder="Enter your Username here "
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>

          <br />

          <label>
            Email
            <input
              type="email"
              name="email" //key
              placeholder="Enter your Email here "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <br />

          <label>
            PassWord
            <input
              type={showPass ? "text" : "password"}
              name="password" //key
              placeholder="Enter your Pass here "
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <p style={{color:"white"}}> {message}</p>
          <p className="link">Already Registered? <Link to={"/login"}>Login Here</Link></p>
          <button onClick={handleRegister}> Submit </button>

        </form>
      </div>
    </div>
  );
};

export default Register;