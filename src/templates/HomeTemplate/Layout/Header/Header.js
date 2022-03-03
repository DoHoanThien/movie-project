import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { useSelector } from "react-redux";
import _ from "lodash";
import { LogoutOutlined } from "@ant-design/icons";
import { TOKEN, USER_LOGIN } from "../../../../util/setting/config";

export default function Header(props) {
    const { thongTinDangNhap } = useSelector(
        (state) => state.QuanLyNguoiDungReducer
    );

    const renderLogin = () => {
        if (_.isEmpty(thongTinDangNhap)) {
            return (
                <div className="flex">
                    <button
                        onClick={() => {
                            history.push("/login");
                        }}
                        className="mr-3 transition-all inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base text-black mt-4 md:mt-0"
                    >
                        Đăng Nhập
                    </button>
                    <button
                        onClick={() => {
                            history.push("/register");
                        }}
                        className="mr-3 transition-all inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base text-black mt-4 md:mt-0"
                    >
                        Đăng Ký
                    </button>
                </div>
            );
        } else {
            return (
                <div className="flex items-center">
                    <NavLink
                        to="/admin"
                        className="text-indigo-400 hover:text-indigo-300 transition-all duration-200 mr-2 font-medium"
                    >
                        {thongTinDangNhap.hoTen}
                    </NavLink>
                    <LogoutOutlined
                        onClick={() => {
                            localStorage.removeItem(USER_LOGIN);
                            localStorage.removeItem(TOKEN);
                            window.location.reload();
                        }}
                        style={{
                            color: "rgb(190 18 60)",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    />
                </div>
            );
        }
    };

    return (
        <header className="text-white body-font fixed z-10 w-full bg-slate-800/50">
            <div className="mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
                <NavLink
                    to="/"
                    className="flex title-font font-medium items-center text-white hover:text-indigo-500 mb-4 md:mb-0"
                >
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
                    <span className="ml-3 text-xl hover:text-indigo-500">
                        Movie
                    </span>
                </NavLink>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <NavLink
                        to="/"
                        className="mr-5 text-white hover:text-indigo-500"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/"
                        className="mr-5 text-white hover:text-indigo-500"
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/"
                        className="mr-5 text-white hover:text-indigo-500"
                    >
                        New
                    </NavLink>
                </nav>
                {renderLogin()}
            </div>
        </header>
    );
}
