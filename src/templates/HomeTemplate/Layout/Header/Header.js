import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="text-white body-font fixed z-10 w-full bg-slate-800/50">
            <div className="mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="ml-3 text-xl">Movie</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/home" className="mr-5 hover:text-gray-900">
                        Home
                    </NavLink>
                    <NavLink to="/contact" className="mr-5 hover:text-gray-900">
                        Contact
                    </NavLink>
                    <NavLink to="/news" className="mr-5 hover:text-gray-900">
                        New
                    </NavLink>
                </nav>
                <button className="mr-3 transition-all inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base text-black mt-4 md:mt-0">
                    Sign in
                </button>
            </div>
        </header>
    );
}
