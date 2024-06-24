import {useContext} from 'react'
import { AuthContext } from './AuthProvider'
import {Link, useNavigate} from 'react-router-dom'


function Login() {
    const { userLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin=()=>{
        event.preventDefault()
        userLogIn(event.target.email.value,event.target.password.value)
        navigate('/')
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                       
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className=' px-10 py-4 rounded-md bg-green-500 text-white'>
                        <Link to="/register">No account yet? Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
