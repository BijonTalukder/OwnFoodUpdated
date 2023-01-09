import React from "react";
import img from "../../assets/img/loginimg1.png";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div>
      <section class="sf-form-part">
        <div class="container ">
          <div class="row justify-content-center align-items-center ">
            <div class="col-8 col-sm-8 col-md-8  col-lg-8 col-xl-8 signIn-innerPart mt-5">
              <div class="">
                <div class=" mb-4 mt-3">
                  <h2 className="text-white">welcome!</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div class="">
                  <div className="row">
                    <div className="col-4">
                      <img src={img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4">
                      <form class="user-form">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="check"
                          />
                          <label class="form-check-label" for="check">
                            Remember Me
                          </label>
                        </div>
                        <div class="form-button">
                          <button type="submit">login</button>
                        </div>
                      </form>
                      <div className="mt-3">
                        <p>
                          Forgot your password?
                          <a href="reset-password.html">reset here</a>
                        </p>
                        <p>
                          Don't have any account?<a href="#">register here</a>
                        </p>
                      </div>
                      <div class="user-form-footer">
                        <p>
                          OWN | &COPY; Copyright by <a href="#">OWN-FOOD</a>
                        </p>
                      </div>
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

export default SignIn;
