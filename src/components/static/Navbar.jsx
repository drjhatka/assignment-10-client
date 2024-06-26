import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import { GiClothJar } from "react-icons/gi";
import { AuthContext } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
function Navbar() {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()

    const signOut = () => {
        logOut()
        navigate('/login')
    }//end event handler
    return (
        <div style={{fontFamily:'georgia'}} className="navbar sticky top-0 bg-slate-50 z-50 shadow-md border-2 rounded-b-md pb-2">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md text-2xl dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><NavLink to='/'>Home</NavLink></li>
                        <li>
                            <a>View Categories</a>
                            <ul className="p-2 z-auto">
                                <li><Link >Earthenware</Link></li>
                                <li><Link>Ceramic</Link></li>
                                <li><Link>Porcelin</Link></li>
                            </ul>
                        </li>
                        <li><NavLink to='/view-all-items'>View All Items</NavLink></li>
                        <li><NavLink to='/add-product'>Add Product</NavLink></li>
                        <li><NavLink to='/product-list'>My Product List</NavLink></li>
                    </ul>
                </div>
                <div>
                    <p className="btn btn-ghost text-xl flex items-center"><GiClothJar className='lg:text-3xl  text-red-800' /> <Link to='/'>KumarPara</Link></p>
                </div>
            </div>
            <div className="navbar-center text-xl hidden md:flex">
                <ul className="menu font-semibold  menu-horizontal px-1 lg:gap-4">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li>
                        <details>
                            <summary >Categories </summary>
                            <ul className="p-2 z-10">
                                <li><Link to='/'>Earthenware</Link></li>
                                <li><Link to='/'>Ceramic</Link></li>
                                <li><Link to='/'>Porcelin</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><NavLink to='/view-all-items'>View All Items</NavLink></li>
                    {
                        user ?
                            <>
                                <li><NavLink to='/add-craft'>Add Product</NavLink></li>
                                <li><NavLink to='/view-addlist'>My Add List </NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/login'>Login</NavLink></li>
                                <li><NavLink to='/register'>Register </NavLink></li>
                            </>
                    }
                </ul>
            </div>
            {
                user &&
                <div className="navbar-end gap-4">
                    <div><span className='px-4 py-2 hidden lg:block border-2 rounded-md text-blue-700 font-semibold text-xs shadow-md'>{user?.email}</span></div>

                    <div className="dropdown dropdown-end z-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border-2 border-green-500 ">
                                <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}
                                    alt='Photo'
                                    src={user?.photoURL} />
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='bg-amber-500 rounded-md mb-2 text-white'>
                                <a className="text-center border-2">
                                    Edit Profile                                    
                                </a>
                            </li>
                            <li className='bg-amber-500 rounded-md  text-white'><button onClick={signOut}>Logout</button></li>
                        </ul>
                    </div>
                    <Tooltip id="my-tooltip" />
                </div>
            }

        </div>

    )
}

export default Navbar
