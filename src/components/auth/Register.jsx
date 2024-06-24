import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import Swal from 'sweetalert2'

function Register() {
    const { user, createUser, profileUpdate } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = () => {
        event.preventDefault()
       console.log(event.target.name.value, event.target.photoURL.value)
        createUser(event.target.email.value, event.target.password.value).then((userCredential) => {
            // Signed up 

            //console.log(event.target.name.value, event.target.photoURL.value)
            setTimeout(()=>Swal.fire({
                title: 'User Added!',
                text: 'User added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'

            }),500)
            //navigate('/login')
          })
          profileUpdate(event.target.name.value,event.target.photoURL.value)
    
        //redirect to login page
        navigate('/')


    }
    console.log(user)
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className=' px-10 py-4 rounded-md bg-green-500 text-white'>
                        <Link to="/login">Already have an Account? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
