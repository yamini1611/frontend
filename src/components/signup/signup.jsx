import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the POST request using Axios
      const response = await axios.post("http://localhost:4000/login", {
        name,
        email,
        password,
        repeatPassword,
      });

      // Show success toast message
      toast.success("Signup successful!");

      // Reset the form fields
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error(error);
    }
  };

  return (
    <div className="row" style={{overflowX:"hidden"}}>
      <div className="col" style={{paddingLeft:10 ,paddingRight:10}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{width:550,marginTop:20}}>
              <div className="card-body" style={{width:450}}>
                <h1 className="card-title text-center">Sign up</h1>
                <form onSubmit={handleSubmit} style={{width:350 }}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i> Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="repeatPassword" className="form-label">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>Repeat Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="repeatPassword"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                    />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-dark">
                      Register
                    </button>
                  </div>
                </form>
                <h3 className="text-center mt-3">
                  <Link to="/Login" style={{fontSize:16}}>Already have an account? Login</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-5" style={{marginTop:150}}>
       
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample "></img>
      </div>
      <ToastContainer position="top-enter" />
    </div>
  );
};

export default Signup;
