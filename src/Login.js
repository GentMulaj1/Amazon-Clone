import React from 'react'
import Header from './Header'
import './Login.css'

const Login = () => {
  return (
    <>
        <Header/>
        <div className="login__mid">
            <div className='login'>
            
            <h1>Sign in</h1>
            <form>
                <label className='login__lable'>Email or mobile phone number</label>
                <input type="text" className='login__input' />
                <button>Continue</button>
            </form>
            <span>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </span>

            <a href="#">Need help?</a>
        </div>
        </div>
    </>
  )
}

export default Login
