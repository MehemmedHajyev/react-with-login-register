import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const BASE_URL = ' http://localhost:8000/users'

const Register = () => {
    const navigate = useNavigate()
    const [inputPhrase, setInputPhrase] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleCreateUser = async (user) => {
        await axios.post(BASE_URL, user)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        handleCreateUser(inputPhrase)
        navigate('/login')
    }

    const handleInputChange = (e) => {
        setInputPhrase({ ...inputPhrase, [e.target.name]: e.target.value })
    }
    console.log(inputPhrase);

    return (
        <>
            <h3>Register</h3>
            <form onSubmit={handleOnSubmit} className='w-25 m-auto'>
                <label className='d-flex' htmlFor="username">Username</label>
                <input onChange={handleInputChange} className='form-control mb-3' type="text" id='username' placeholder='Enter a username...' name='username' />
                <label className='d-flex' htmlFor="email">Email</label>
                <input onChange={handleInputChange} className='form-control mb-3' type="text" id='email' placeholder='Enter an email...' name='email' />
                <label className='d-flex' htmlFor="password">Password</label>
                <input onChange={handleInputChange} className='form-control mb-3' type="text" id='password' placeholder='Enter a password...' name='password' />
                <button className='btn btn-dark w-100 mt-3' type='submit'>Register</button>
                <Link to='/login'>Login</Link>
            </form>
        </>
    )
}

export default Register