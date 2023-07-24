import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const BASE_URL = ' http://localhost:8000/users'

const SignIn = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [inputPhrase, setInputPhrase] = useState({
        email: '',
        password: ''
    })


    const getUsers = async () => {
        const res = await axios(BASE_URL)
        const data = await res.data
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, []);

    const handleInputChange = (e) => {
        setInputPhrase({ ...inputPhrase, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const user = users.find((u) => u.email === inputPhrase.email && u.password === inputPhrase.password)
        console.log(user);
        if (user) {
            navigate('/')
        } else {
            alert('User is not found!')
            console.log('User is not found!');
        }
    }

    return (
        <>
            <h3>Login</h3>
            <form onSubmit={handleOnSubmit} className='w-25 m-auto'>
                <label className='d-flex' htmlFor="email">Email</label>
                <input onChange={handleInputChange} className='form-control mb-3' type="text" id='email' placeholder='Enter an email...' name='email' />
                <label className='d-flex' htmlFor="password">Password</label>
                <input onChange={handleInputChange} className='form-control mb-3' type="text" id='password' placeholder='Enter a password...' name='password' />
                <button className='btn btn-dark w-100 mt-3' type='submit'>Sign in</button>
                <Link to='/register'>Register</Link>
            </form>
        </>
    )
}

export default SignIn