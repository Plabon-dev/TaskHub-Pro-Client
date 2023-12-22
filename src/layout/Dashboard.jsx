import { NavLink, Outlet } from "react-router-dom";
import { FaEnvelope, FaHome, FaHouseUser, FaList, FaSearch } from "react-icons/fa";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    const userDashboardLinks =
        <>
            <li>
                <NavLink to={`/dashboard/home`}
                >
                    <FaHouseUser className='text-2xl text-[#4F65E0] '></FaHouseUser> Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to={`/dashboard/create`}
                >
                    <FaList className='text-2xl text-[#4F65E0] '></FaList> Create
                </NavLink>
            </li>

        </>

    const normalLinks =
        <>
            <li>
                <NavLink to="/">
                    <FaHome className="text-2xl text-[#4F65E0]"></FaHome>
                    Home</NavLink>
            </li>
           
        </>


    return (
        <div >
            <div className="drawer md:drawer-open bg-[#edf0fb]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <div className="w-full ">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Navbar</label>
                        
                        <Outlet></Outlet>
                    </div>
                    {/* Page content here */}

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 font-semibold text-base-content">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Close</label>
                        {/* Sidebar content here */}
                        <li>
                            {
                                user?.email ?
                                    <div className="flex flex-col gap-4">
                                        <img title="Profile" className=" rounded-full h-12 w-12 " src={`${user?.photoURL}`} alt="" />
                                        <h1 className=" font-bold">{user?.displayName}</h1>
                                    </div>
                                    :
                                    ''
                            }
                        </li>
                        {userDashboardLinks}
                        
                        <div className="divider"></div>
                        {normalLinks}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;