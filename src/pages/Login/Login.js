import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { quanLyDangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { NavLink } from "react-router-dom";

export default function Login(props) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
        },
        onSubmit: (values) => {
            dispatch(quanLyDangNhapAction(values));
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="lg:w-1/2 xl:max-w-screen-sm bg-slate-800 h-screen shadow-xl shadow-slate-900/80"
        >
            <div className="py-12 flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
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
                    <div className="text-3xl text-white tracking-wide ml-2 font-semibold">
                        Movie
                    </div>
                </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-5xl text-indigo-700 font-display font-semibold lg:text-left xl:text-5xl after:xl:text-bold">
                    Đăng Nhập
                </h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                Tài Khoản
                            </div>
                            <input
                                name="taiKhoan"
                                value={formik.values.taiKhoan}
                                onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b text-teal-50 border-gray-300 focus:outline-none focus:border-orange-800 bg-slate-800"
                                placeholder="Nhập tài khoản"
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật Khẩu
                                </div>
                                <div>
                                    <a className="text-xs font-display font-semibold text-orange-800 hover:text-indigo-800 cursor-pointer">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>
                            <input
                                name="matKhau"
                                type="password"
                                value={formik.values.matKhau}
                                onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b text-teal-50 border-gray-300 focus:outline-none focus:border-orange-800 bg-slate-800"
                                placeholder="Nhập mật khẩu"
                            />
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="bg-indigo-800 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-700 shadow-lg"
                            >
                                Đăng Nhập
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Bạn chưa có tài khoản ?{" "}
                        <NavLink
                            to="/register"
                            className="cursor-pointer text-orange-800 hover:text-indigo-800"
                        >
                            Đăng ký
                        </NavLink>
                    </div>
                </div>
            </div>
        </form>
    );
}
