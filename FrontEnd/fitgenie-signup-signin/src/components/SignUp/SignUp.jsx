import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../../firebase';
import './SignUp.css';

import heroImg from '../../images/hero.png';
import logoImg from '../../images/logo.webp';

function SignUp() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed up:', user.displayName);
      navigate('/home'); // غيّر المسار حسب صفحتك الرئيسية
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <>
      {/* Left Side */}
      <div className="heroWrapper">
        <img src={heroImg} className="hero" alt="hero" />

        <header onClick={handleLogoClick}>
          <img src={logoImg} alt="logo photo" className="logo" />
          <h1>Fit<span>Genie</span></h1>
        </header>

        <section>
          <h2>Transform Your <br /> <span>Fitness Journey</span></h2>
          <p>
            AI-powered workout plans, personalized nutrition guides, and progress
            tracking — all tailored to your goals.
          </p>
          <div className="statusContainer">
            <p className="numOfUsers">
              10K+ <br />
              <span>Active Users</span>
            </p>
            <p className="numOfSuccess">
              95% <br />
              <span>Success Rate</span>
            </p>
          </div>
        </section>
      </div>

      {/* Right Side */}
      <div className="authContainer">
        <h3>Create your account</h3>
        <p className="subtitle">Start your fitness transformation today</p>

        <button className="googleBtn" onClick={handleGoogleSignUp}>
          <svg className="googleIcon" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <p className="signinText">
          Already have an account?{' '}
          <span onClick={handleSignIn}>Sign in</span>
        </p>

        <h5 className="termsText">
          By continuing, you agree to our <span>Terms of Service</span> and{' '}
          <span>Privacy Policy</span>
        </h5>
      </div>
    </>
  );
}

export default SignUp;