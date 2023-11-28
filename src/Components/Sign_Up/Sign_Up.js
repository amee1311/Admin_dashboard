import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Sign_Up = () => {
    const navigate = useNavigate()
    const [person, setPerson] = useState({ fullName: '', email: '', mobileNumber: '', password: '' });
    const onInputChange = (e) => {
        const { value, name } = e.target;
        setPerson({ ...person, [name]: value })
    }
  const submitData = () => {
    navigate('/admin/dashboard')
  }
    return (
        <div  id="signUp_img">
            <div className='mb-3' >
                <Link to='/admin' style={{color: "black"}}>Back to home</Link>
            </div>

            <div className='container w-50 m-0 m-auto mt-5'>
                <form className= 'border border-2 border-dark p-2 ms-3'>
                    <div class="row mb-4 mt-3">
                        <label class="col-sm-2 col-form-label fw-bold">FullName</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name='fullName' value={person.fullName} onChange={onInputChange} />
                        </div>
                    </div>
                    <div class="row mb-4 mt-3">
                        <label class="col-sm-2 col-form-label fw-bold">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control " name='email' value={person.email} onChange={onInputChange} />
                        </div>
                    </div>
                    <div class="row mb-3 mt-3">
                        <label class="col-sm-2 col-form-label fw-bold">Password</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name='password' value={person.password} onChange={onInputChange} />
                        </div>
                    </div>
                    <div class="row mb-4 mt-3">
                        <label class="col-sm-2 col-form-label fw-bold">MobileNumber</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" name='mobileNumber' value={person.mobileNumber} onChange={onInputChange} />
                        </div>
                    </div>
                    
                    <button type="button" class="btn text-bg-dark text-white fw-bold" onClick={submitData}>Submit</button>
                </form >
            </div>
        </div>
    )
}

export default Sign_Up