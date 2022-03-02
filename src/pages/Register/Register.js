import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { quanLyDangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
import * as Yup from "yup";
import { MA_NHOM } from "../../util/setting/config";

export default function Register() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            hoTen: "",
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: MA_NHOM,
        },
        validationSchema: Yup.object({
            hoTen: Yup.string()
                .required("Bạn chưa nhập họ tên")
                .min(4, "Họ tên phải có từ 4 ký tự"),
            taiKhoan: Yup.string()
                .min(2, "Tài khoản tối thiểu có 2 ký tự")
                .max(15, "Tài khoản tối đa có 15 ký tự")
                .required("Bạn chưa nhập tài khoản"),
            matKhau: Yup.string()
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    "Mật khẩu có từ 7-19 ký tự, phải có chữ cái, chữ số và ký tự đặc biệt"
                )
                .required("Bạn chưa nhập mật khẩu"),
            email: Yup.string()
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Email chưa hợp lệ"
                )
                .required("Bạn chưa nhập email"),
            soDt: Yup.string()
                .required("Bạn chưa nhập số điện thoại")
                .matches(
                    /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                    "Số điện thoại không hợp lệ"
                ),
        }),
        onSubmit: (values) => {
            dispatch(quanLyDangKyAction(values));
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
            <div className="mt-2 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-2 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-5xl text-indigo-700 font-display font-semibold lg:text-left xl:text-5xl after:xl:text-bold">
                    Đăng Ký
                </h2>
                <div className="mt-12">
                    <div>
                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                            Họ Tên
                        </div>
                        <input
                            name="hoTen"
                            value={formik.values.hoTen}
                            onChange={formik.handleChange}
                            className="w-full text-lg py-2 border-b text-teal-50 border-gray-300 focus:outline-none focus:border-orange-800 autofill:bg-slate-800 bg-slate-800"
                            placeholder="Nhập họ tên"
                        />
                        {formik.errors.hoTen && (
                            <p className="text-orange-300">
                                {formik.errors.hoTen}
                            </p>
                        )}
                    </div>
                    <div>
                        <div className="text-sm mt-7 font-bold text-gray-700 tracking-wide">
                            Tài Khoản
                        </div>
                        <input
                            name="taiKhoan"
                            value={formik.values.taiKhoan}
                            onChange={formik.handleChange}
                            className="w-full text-lg py-2 border-b text-teal-50 border-gray-300 focus:outline-none focus:border-orange-800 bg-slate-800"
                            placeholder="Nhập tài khoản"
                        />
                        {formik.errors.taiKhoan && (
                            <p className="text-orange-300">
                                {formik.errors.taiKhoan}
                            </p>
                        )}
                    </div>
                    <div>
                        <div className="text-sm mt-7 font-bold text-gray-700 tracking-wide">
                            Mật Khẩu
                        </div>
                        <input
                            name="matKhau"
                            type="password"
                            value={formik.values.matKhau}
                            onChange={formik.handleChange}
                            className="w-full text-lg py-2 border-b text-teal-50 border-gray-300 focus:outline-none focus:border-orange-800 bg-slate-800"
                            placeholder="Nhập mật khẩu"
                        />
                        {formik.errors.matKhau && (
                            <p className="text-orange-300">
                                {formik.errors.matKhau}
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <div className="text-sm mt-7 font-bold text-gray-700 tracking-wide">
                                Email
                            </div>
                            <input
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b text-teal-50 border-gray-300 focus:outline-none focus:border-orange-800 bg-slate-800"
                                placeholder="Nhập e-mail"
                            />
                            {formik.errors.email && (
                                <p className="text-orange-300">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <div className="text-sm mt-7 font-bold text-gray-700 tracking-wide">
                                Số Điện Thoại
                            </div>
                            <input
                                name="soDt"
                                value={formik.values.soDt}
                                onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b text-teal-50 border-gray-300 focus:outline-none focus:border-orange-800 bg-slate-800"
                                placeholder="Nhập số điện thoại"
                            />
                            {formik.errors.soDt && (
                                <p className="text-orange-300">
                                    {formik.errors.soDt}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="bg-indigo-800 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-700 shadow-lg"
                        >
                            Đăng Ký
                        </button>
                    </div>
                </div>
                <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                    Bạn đã có tài khoản ?{" "}
                    <NavLink
                        to="/login"
                        className="cursor-pointer text-orange-800 hover:text-indigo-800"
                    >
                        Đăng Nhập
                    </NavLink>
                </div>
            </div>
        </form>
    );
}
