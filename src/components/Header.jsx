
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
    const { user, logout } = useAuth();

    const links = [
        {
            "id": 1,
            "url": "/",
            "text": "Home",
        },
        {
            "id": 4,
            "url": "/usage",
            "text": "Usage",
        },
        {
            "id": 2,
            "url": "/about",
            "text": "About",
        },
        {
            "id": 3,
            "url": "/contact",
            "text": "Contact",
        },
        // {
        //     "id": 4,
        //     "url": "/",
        //     "text": "Dashboard",
        // }
    ]

    const navLinks = links.map(link => (
        <li key={link.id}><NavLink to={link.url}>{link.text}</NavLink></li>
    ))



    return (
        <>

            <div className="drawer z-50">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    {/* Page content here */}
                    <div className="navbar fixed top-0 inset-x-0 z-50 bg-base-100 shadow">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navLinks}
                                </ul>
                            </div>
                            <NavLink to="/" className="font-bold text-2xl btn btn-ghost">Class Routine</NavLink>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navLinks}
                            </ul>
                        </div>

                        <div className="navbar-end">
                            {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </label> */}



                            {user ?
                                <div className="flex items-center gap-4 border-black">
                                    <label className="btn btn-ghost btn-circle drawer-button" htmlFor="my-drawer-4" >
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                            {/* <span className="badge badge-xs w-4 h-4 badge-error indicator-item">8</span> */}
                                            {/* <span className="badge badge-sm indicator-item">8</span> */}
                                        </div>
                                    </label>

                                    <button onClick={logout} className="btn btn-ghost btn-circle drawer-button" htmlFor="my-drawer-4" >
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            {/* <span className="badge badge-sm indicator-item">8</span> */}
                                        </div>
                                    </button>
                                    <div className="divider border"></div>

                                    {
                                        user?.photoURL ?
                                            <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                    <img src={user?.photoURL} />
                                                </div>
                                            </div>
                                            :
                                            <div className="avatar placeholder">
                                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                                    <span>SY</span>
                                                </div>
                                            </div>
                                    }
                                    {/* <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div> */}
                                    {user && <h3 className="font-semibold text-xl">{user?.displayName}</h3>}
                                    {/* <button onClick={logout} className="btn btn-neutral">Logout</button> */}
                                </div>
                                :
                                <NavLink to="/login" className="btn btn-neutral">Login</NavLink>


                            }
                        </div>

                    </div>


                </div>


                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>



        </>
    );
};

export default Header;