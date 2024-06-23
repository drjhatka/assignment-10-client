import { NavLink, Link } from 'react-router-dom'
import { GiClothJar } from "react-icons/gi";
function Navbar() {
    return (

        <div className="navbar bg-[#cddbcbd2] border-2 rounded-b-md mb-36 pb-2">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><NavLink  to='/'>Home</NavLink></li>
                        <li>
                            <a>View Categories</a>
                            <ul className="p-2">
                                <li><Link >Earthenware</Link></li>
                                <li><Link>Ceramic</Link></li>
                                <li><Link>Porcelin</Link></li>
                            </ul>
                        </li>
                        <li><NavLink to='/add-product'>Add Product</NavLink></li>
                        <li><NavLink to='/product-list'>My Product List</NavLink></li>
                    </ul>
                </div>
                <div>
                    <a className="btn btn-ghost text-xl flex items-center"><GiClothJar className='lg:text-3xl  text-[#FF671F]' /> <span>KumarPara</span></a>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu font-semibold  menu-horizontal px-1 lg:gap-4">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li>
                        <details>
                            <summary >Categories </summary>
                            <ul className="p-2">
                                <li><Link to='/'>Earthenware</Link></li>
                                <li><Link to='/'>Ceramic</Link></li>
                                <li><Link to='/'>Porcelin</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><NavLink to='/add-craft'>Add Product</NavLink></li>
                    <li><NavLink to='/product-list'>My Add List </NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>

    )
}

export default Navbar
