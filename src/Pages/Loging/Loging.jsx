import React from 'react'
import Header from '../../Component/Header/Header'
import Body from '../../Component/Body/Body'
import './Loging.css'
import Footer from '../../Component/Footer/Footer'

function Loging() {
    return (
        <div>
            <Header />
            <div className='body-content'>
                <Body>
                    <div className='header'>
                        <div className='text-r'>Log In</div>
                        <div className='underline'></div>
                    </div>
                    <div className='container'>
                        <div className='inputs'>
                            <div className='input'>
                                <p>User Name</p>
                                <input type='name' placeholder='Enter Your User Name' />
                                <p>Password</p>
                                <input type='password' placeholder='Enter Your Password' />
                            </div>

                            <div className='login-container'>
                                <button className='login'>Log In</button>
                            </div>

                            <div className='fogot-creat-content'>
                                <div className='fogot'>Forgot Password</div>
                                <div className='creat'>Create Account</div>
                            </div>
                        </div>
                    </div>
                </Body>
            </div>
            <Footer />
        </div>
    )
}

export default Loging