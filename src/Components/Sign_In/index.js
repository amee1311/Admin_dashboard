import axios from 'axios';
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sign_In = () => {
    const [person, setPerson] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const onInputChange = (e) => {
        const { value, name } = e.target;
        setPerson({ ...person, [name]: value })
    }
    let submitData = () => {
        const { email, password } = person;
        axios.post('https://iris-api.mycodelibraries.com/api/User/LoginAuthenticate', { "email": email, "password": password }).then((x) => {
            localStorage.setItem('token', x.data.responseData.token);
            navigate('/admin/dashboard');
        }).catch((x) => {
            toast.error('🦄 Opps!!! Incorrect Email and Password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
        setPerson({ email: "", password: "" })
    }
    return (
       <>
       <ToastContainer />
        <div id="signIn_img" style={{padding: 50}}>
            <div className='border border-4 border-white border-opacity-75 w-50 m-0 m-auto p-5' >
                <h3 className='text-black mt-3'>Sign_In</h3>
                <div className='mt-5'>
                    <input type="text" className='w-50 mt-3 p-2' name='email' placeholder='Email' value={person.email} onChange={onInputChange} />
                </div>
                <div className='mt-3'>
                    <input type="text" className='w-50 p-2' name='password' placeholder='Password' value={person.password} onChange={onInputChange} />
                </div>
                <div>
                    <button className='btn btn-primary bg-primary my-4 text-black' onClick={submitData}>Get Started</button>
                </div>


                <>
                    Don't have an Account?<Link to='/admin/signup' className='text-black'>Create an Account</Link>
                    <Outlet />

                </>

            </div>
        </div>
       </>
    )
}

export default Sign_In