import React from 'react';
import './AuthPopup.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

interface AuthPopupProps {
    mode: 'signIn' | 'signUp';
    onClose: () => void;
    onSwitchMode: (newMode: 'signIn' | 'signUp') => void;
}

const AuthPopup: React.FC<AuthPopupProps> = ({ mode, onClose, onSwitchMode }) => {
    const isSignIn = mode === 'signIn';

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <div className="popup-header">
                    <h2 className="popup-title">{isSignIn ? 'Welcome Back!' : 'Create Your Account'}</h2>
                    <button className="popup-close-button" onClick={onClose}>&times;</button>
                </div>
                
                <div className="social-login">
                    <button className="social-button google">
                        <FaGoogle className="social-icon" />
                        <span>{isSignIn ? 'Sign In' : 'Sign Up'} with Google</span>
                    </button>
                    <button className="social-button facebook">
                        <FaFacebook className="social-icon" />
                        <span>{isSignIn ? 'Sign In' : 'Sign Up'} with Facebook</span>
                    </button>
                </div>

                <div className="divider-container">
                    <div className="divider-line"></div>
                    <span className="divider-text">OR</span>
                    <div className="divider-line"></div>
                </div>
                
                <form className="popup-form">
                    {!isSignIn && (
                        <div className="popup-form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Choose a username" required />
                        </div>
                    )}
                    <div className="popup-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="popup-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>
                    {isSignIn && (
                        <a href="#" className="forgot-password-link">Forgot password?</a>
                    )}
                    <button type="submit" className="popup-submit-button">
                        {isSignIn ? 'Sign In' : 'Create Account'}
                    </button>
                </form>
                
                <div className="popup-footer">
                    {isSignIn ? (
                        <p>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onSwitchMode('signUp'); }}>Sign Up</a></p>
                    ) : (
                        <p>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onSwitchMode('signIn'); }}>Sign In</a></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPopup;