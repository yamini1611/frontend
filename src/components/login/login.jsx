import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage ,setErrorMessage] =useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make the GET request using Axios
      const response = await axios.get("http://localhost:4000/login");
  
      // Check if the login was successful
      const user = response.data.find((user) => user.email === email && user.password === password);
  
      if (user) {
        // Redirect the user or perform necessary actions
        console.log("Login successful!");
        setErrorMessage(""); // Clear any previous error message
      } else {
        // Show error message for unsuccessful login
        setErrorMessage("Invalid email or password. Please try again.");
      }
  
      // Reset the form fields
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error(error);
    }
  };
  

  return (
    <div style={{ paddingBottom: 50 }}>
      <section className="vh-100" style={{ backgroundColor: "Desaturated dark red" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: 1 }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: 1 }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit} >
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: "orange" }}></i>
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "darkviolet" }}>
                          Don't have an account?{" "}
                          <Link to="/Signup" style={{ color: "darkgoldenrod" }}>
                            Register here
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
