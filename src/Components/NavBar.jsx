import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FaHome, FaLightbulb, FaUser } from "react-icons/fa";

const NavBar = () => {

    const navOptions = <>
        <li><NavLink className="font-semibold mb-2" to="/"> <FaHome className='text-xl text-sky-600 interactable' ></FaHome  >Home</NavLink></li>
        <li><NavLink className="font-semibold mb-2" to="/features"><FaLightbulb className='text-xl text-sky-600 interactable' ></FaLightbulb  >Our Features</NavLink></li>
        <li>
            <NavLink
                to="/dashboard"
                className="font-semibold"
            >
                <FaUser className='text-xl text-sky-600 interactable' ></FaUser  >  Dashboard
            </NavLink>
        </li>

    </>

    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <div>
                <div className="navbar bg-gradient-to-r from-[#3ba1c5] to-[#92cbdf]">
                    <div className="navbar-start">

                        <details className="dropdown">
                            <summary className="m-1 btn btn-ghost "> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </details>



                        <Link to='/'>
                            <div className="space-x-2 flex justify-center items-center rounded-r-full rounded-l-full w-48 h-10 md:w-56 navbar-center">
                                <div className="avatar">
                                    <div className="w-8 md:w-10 rounded-full">
                                        <img className="" src="https://i.ibb.co/tYtS43G/9a3cfc0b-963d-4a9f-99cb-5a11ff1bc52e.jpg" />
                                    </div>
                                </div>
                                <h2 className="p-0 normal-case text-base sm:text-lg md:text-2xl font-semibold">TaskHub Pro</h2>
                            </div>
                        </Link>
                    </div>

                    <div className="navbar-end">

                        {
                            user?.email ?
                                <div className="flex gap-2">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle ">
                                            <div className="w-12 rounded-full"  >
                                                <button className="btn btn-ghost btn-circle w-12 rounded-full">

                                                    {user && user?.photoURL ? <img title="Profile" className=" rounded-full border-sky-600 border-2" src={user && user.photoURL} alt="" /> :
                                                        <div>
                                                            {
                                                                <img title="Profile" className=" rounded-full  border-[#8ABB6A] border-2" src='https://web.programming-hero.com/static/media/profileImage.934e5b10.png' alt="" />

                                                            }

                                                        </div>}
                                                </button>
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 space-y-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-sky-300 rounded-box w-52">



                                            {user && user?.photoURL ?
                                                <div className="flex justify-center">
                                                    <h1>● {user && user.displayName}</h1>
                                                </div>
                                                :
                                                <div className="flex justify-center">
                                                    <h1>● {user && user.displayName}</h1>
                                                </div>
                                            }

                                            <li> <button onClick={logout} className="btn btn-xs md:btn-sm">Log Out</button></li>


                                        </ul>
                                    </div>
                                </div>
                                :
                                ''

                        }

                        {
                            user ?
                                ''
                                :
                                <Link to='/login'><button className="btn btn-sm md:btn-sm ">Login</button></Link>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;