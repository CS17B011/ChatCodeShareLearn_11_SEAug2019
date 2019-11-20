import React, { Component } from 'react';
import './../css/Login.css';
import './../css/util.css';

export default class Login extends Component {

  render() {
    return (
      <div>
        <title>Login</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*===============================================================================================*/}    
        <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
        {/*===============================================================================================*/}    
        <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
        {/*===============================================================================================*/}    
        <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />
        {/*===============================================================================================*/}
        <link rel="stylesheet" type="text/css" href="css/util.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        {/*===============================================================================================*/}
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-34">
                  Account Login
                </span>
                <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
                  <input id="first-name" className="input100" type="text" name="username" placeholder="User name" />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
                  <input className="input100" type="password" name="pass" placeholder="Password" />
                  <span className="focus-input100" />
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Sign in
                  </button>
                </div>
                <div className="w-full text-center p-t-27 p-b-239">
                  <span className="txt1">
                    Forgot
                  </span>
                  <a href="#" className="txt2">
                    User name / password?
                  </a>
                </div>
                <div className="w-full text-center">
                  <a href="#" className="txt3">
                    Sign Up
                  </a>
                </div>
              </form>
              <div className="login100-more" />
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
      </div>
    );
  }
}