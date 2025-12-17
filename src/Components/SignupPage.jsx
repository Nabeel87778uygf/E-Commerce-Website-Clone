import React from 'react';
import './SignupPage.css';
import googleLogo from '../assets/googlelogo.jpg';
import signupImage from '../assets/shoppingimage.jpg';

const SignupPage = () => {
    return (
        <div className="signup-page-container">
            {/* Left side image (50%) */}
            <div className="signup-image-container">
                <img src={signupImage} alt="Signup visual" className="signup-image" />
            </div>

            {/* Right side content (50%) */}
            <div className="signup-content-container">
                {/* Form container (80% of the right side to leave 10% empty space) */}
                <div className="signup-form-container">
                    <div className="signup-card">
                        <h1 className="signup-title">Create an account</h1>
                        <p className="signup-subtitle">Enter your details below</p>

                        <form className="signup-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Email or Phone Number"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-input"
                                />
                            </div>

                            <button type="submit" className="signup-button">Create Account</button>
                        </form>

                        <div className="divider">
                            <span className="divider-line"></span>

                        </div>

                        <button className="google-button">
                            <img src={googleLogo} alt="Google logo" className="google-logo" />
                            Sign up with Google
                        </button>

                        <p className="login-link">
                            Already have in account <a href="/login">Log in...</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;